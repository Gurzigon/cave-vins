import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import wineRouter from './controllers/wineController';
import userRouter from './controllers/userController';
import authRouter from './controllers/authController';

const app = new Hono();

app.route('/api/v1', wineRouter);
app.route('/api/v1', userRouter);
app.route('/api/v1', authRouter);

serve({
    fetch: app.fetch,
    port: 3000
  }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  });