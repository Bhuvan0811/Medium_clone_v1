import { Context, Next } from 'hono'
import { jwt } from 'hono/jwt'

const authMiddleware = (c: Context, next:Next)=>{
    console.log("verify")
    return jwt({
        secret: c.env.JWT_SECRET
    })(c, next)
}

export default authMiddleware