import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";

export const addUserIdHeader = createMiddleware(async (c, next) => {
  
  const authHeader = c.req.header('Authorization')

  
  if(!authHeader?.startsWith('Bearer ')) {
    return next();
  }

  // Je vais récupérer le token  
  const token = authHeader.split(' ')[1]

  try {
    // Je vais vérifier que le token est valide
    const tokenPayload = await verify(token, process.env.JWT_SECRET || 'default_secret')

    // Si le token est valide, je rajoute dans les headers de la requête l'id de l'utilisateur      
    c.req.raw.headers.set('x-user-id', tokenPayload.sub as string)    
  } catch(error) {
    // Si le token n'est pas valide, je fais comme si il n'existait pas
  }
  return next()
});