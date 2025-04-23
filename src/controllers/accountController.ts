import { Hono } from "hono"
import { prisma } from "../utils/prisma";
import { jwtAuth } from "../middleware/jwtAuth";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { HTTPException } from "hono/http-exception";
import argon2 from "argon2";

const accountRouter = new Hono()

const headerUserIdSchema = z.object({
  'x-user-id': z.string().cuid()
});

const updateUserSchema = z.object({
  pseudonyme: z.string(),  
  email: z.string().email(),
  password: z.string()
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 
      'Le mot de passe doit contenir au moins 6 caractères, une lettre minuscule, une lettre majuscule et un chiffre'
    ) 
}).partial()

accountRouter.basePath('/account')
.get(
  '/',jwtAuth,
  zValidator('header', headerUserIdSchema),
  async (ctx) => {
    const userId = ctx.req.valid('header')['x-user-id']

    const userFound = await prisma.utilisateur.findUnique({
      where: {
        id: userId
      },
      omit: {
        password: true
      }
    })

    // Si l'utilisateur n'est pas trouvé, c'est qu'il n'est pas connecté ou qu'il n'existe pas
    // On renvoie une erreur 401
    if(!userFound) {
      throw new HTTPException(401, {
        message: 'Unauthorized'
      })
    }

    return ctx.json(userFound)
  }
)

.patch(
  '/',
  zValidator('header', headerUserIdSchema),
  zValidator('json', updateUserSchema),
  async (ctx) => {
    const userId = ctx.req.valid('header')['x-user-id']
    const data = ctx.req.valid('json')

    // On va chercher l'utilisateur en BDD
    const userFound = await prisma.utilisateur.findUnique({
      where: {
        id: userId
      }
    })

    // Si l'utilisateur n'est pas trouvé, c'est qu'il n'est pas connecté ou qu'il n'existe pas
    // On renvoie une erreur 401
    if(!userFound) {
      throw new HTTPException(401, {
        message: 'Unauthorized'
      })
    }

    // Attention, si le mot de passe est modifié, il faut le hasher avant de l'envoyer en BDD
    if(data.password) {
      data.password = await argon2.hash(data.password)
    }

    // On met à jour l'utilisateur en BDD
    const updatedUser = await prisma.utilisateur.update({
      where: {
        id: userId
      },
      data,
      omit: {
        password: true
      }
    })

    return ctx.json(updatedUser)
  }
)



  

  export default accountRouter;