import { Hono } from "hono"
import { prisma } from "../utils/prisma";
import { z } from "zod";
import argon2 from "argon2";
import { zValidator } from "@hono/zod-validator";
import { HTTPException } from "hono/http-exception";
import { generateAccessToken } from "../utils/jwt";

const authRouter = new Hono();

const signupSchema = z.object({
    pseudonyme: z.string().min(2),
    email: z.string().email(),
    password: z.string()
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 
        'Le mot de passe doit contenir au moins 6 caractères, une lettre minuscule, une lettre majuscule et un chiffre'
      ),      
  })
        
  authRouter.basePath('/auth')
  .post(
    '/signup',
    zValidator('json', signupSchema),
    async (ctx) => {
      const data = ctx.req.valid('json')

      // On vérifie que l'email n'existe pas déjà en BDD
      const userExists = await prisma.utilisateur.findUnique({
        where: {
          email: data.email
        }
      })
        // Si l'utilisateur existe déjà, on renvoie une erreur 409
        if (userExists) {
            throw new HTTPException(409, {
              message: 'User already exists'
            })
          }
           // Avant d'ajouter l'utilisateur en BDD, on s'assure de hash le mot de passe
      const hashedPassword = await argon2.hash(data.password)

      // On ajoute l'utilisateur en BDD
      const user = await prisma.utilisateur.create({
        data: {
            pseudonyme: data.pseudonyme,
            email: data.email,
            password: hashedPassword
          },  
          omit: {
            password: true
          }
        }) 
        const accessToken = await generateAccessToken(user)

        return ctx.json({
          user,
          accessToken   
      })
    })
      
 
     
     

    

    export default authRouter