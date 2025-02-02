import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from '@tank_08/medium-commons'

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const { success } = signupInput.safeParse(body);

    if(!success) {
        c.status(411);
        return c.text('Inputs not sent correctly');
    }
    const user = await prisma.user.create({
        data: body,
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token });
})
userRouter.post('/signin', async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    
    const body = await c.req.json();

    const { success } = signinInput.safeParse(body);

    if(!success) {
        c.status(411);
        return c.text('Inputs not sent correctly');
    }
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    });
    
    if(!user) {
        c.status(403);
        return c.text('Wrong credentials');
    }
    
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token });
})
export default userRouter;