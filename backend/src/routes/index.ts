import { Hono } from 'hono'
import userRouter from './user';
import blogRouter from './blog';

const Router = new Hono();

Router.route('/user', userRouter)
Router.route('/blog', blogRouter)

export default Router;