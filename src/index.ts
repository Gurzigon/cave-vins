import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import wineRouter from './controllers/wineController';
import userRouter from './controllers/userController';
import authRouter from './controllers/authController';
import cellarRouter from './controllers/cellarController';
import accountRouter from './controllers/accountController';
import { secureHeaders } from 'hono/secure-headers';
import { cors } from 'hono/cors';
import { addUserIdHeader } from './middleware/addHeaderId';

const app = new Hono();
app.use(secureHeaders())
app.use('*', cors())


app.use('*', addUserIdHeader)

app.route('/api/v1/account', accountRouter);
app.route('/api/v1/wines', wineRouter,);
app.route('/api/v1/users', userRouter);
app.route('/api/v1/auth', authRouter);
app.route('/api/v1/cellars', cellarRouter);


serve({
    fetch: app.fetch,
    port: 3000
  }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
  });