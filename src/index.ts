import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import wineRouter from './controllers/wineController';
import userRouter from './controllers/userController';
import authRouter from './controllers/authController';
import cellarRouter from './controllers/cellarController';
import accountRouter from './controllers/accountController';

const app = new Hono();

app.route('/api/v1', wineRouter);
app.route('/api/v1', userRouter);
app.route('/api/v1', authRouter);
app.route('/api/v1', cellarRouter);
app.route('/api/v1', accountRouter);

serve({
    fetch: app.fetch,
    port: 3000
  }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  });