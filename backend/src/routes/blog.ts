import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import authMiddleware from '../middleware/Auth';
import { JwtVariables } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from '@tank_08/medium-commons'

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
    Variables: JwtVariables
}>();

blogRouter.use('/*', (c, next) => authMiddleware(c,next));
blogRouter.post('/', async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body)

    if(!success){
        c.status(411);
        return c.text("Invalid inputs sent")
    }
    const post = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: c.get('jwtPayload').id
        }
    })
    c.status(200);
    return c.json({
        postId: post.id
    })
})
blogRouter.put('/', async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const { success } = updateBlogInput.safeParse(body)

    if(!success){
        c.status(411);
        return c.text("Invalid inputs sent")
    }

    try{
        await prisma.post.update({
            where:{
                id: body.id,
            }, data:{
                title: body.title,
                content: body.content
            }
        });
        return c.text('Updated post.');
    } catch(e){
        c.status(500);
        return c.text('Internal server Error')
    }
})
blogRouter.get('/bulk', async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    console.log("get Bulk");
    const allBlogs = await prisma.post.findMany({
        select:{
            title: true,
            content: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    });

    c.status(200)
    return c.json({
        blogs: allBlogs
    })
})
blogRouter.get('/:id', async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const blog = await prisma.post.findUnique({
            where:{
                id: c.req.param('id'),
            }, select:{
                title: true,
                content: true,
                author: {
                    select: { 
                        name: true,
                        email: true
                    }
                }
            }
        })
        return c.json({blog : blog});
    } catch(e){
        c.status(500);
        return c.text('Internal server Error')
    }
})
export default blogRouter;