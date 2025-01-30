import { Hono } from 'hono'
import Routes from './routes/index.js'
import { cors } from 'hono/cors';

const app = new Hono();

app.use('/*', cors())
app.route('/api/v1', Routes)

export default app
