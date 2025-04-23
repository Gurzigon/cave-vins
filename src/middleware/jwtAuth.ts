import { createMiddleware } from 'hono/factory';
import { verify } from 'hono/jwt';
import { HTTPException } from 'hono/http-exception';

export const jwtAuth = createMiddleware(async (c, next) => {
  const authHeader = c.req.header('Authorization');
  

  if (!authHeader?.startsWith('Bearer ')) {
    throw new HTTPException(401, { message: 'Vous devez vous identifier avant de pouvoir réaliser cette action' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = await verify(token, process.env.JWT_SECRET || 'default_secret');
    c.set('user', payload); // facultatif : stocker les infos
    await next();
  } catch (error) {
    throw new HTTPException(401, { message: 'Token invalide' });
  }
});