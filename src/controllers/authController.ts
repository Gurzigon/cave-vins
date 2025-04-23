import { Hono } from "hono"
import { prisma } from "../utils/prisma";
import { z } from "zod";
import argon2 from "argon2";
import { zValidator } from "@hono/zod-validator";
import { HTTPException } from "hono/http-exception";
import { generateAccessToken } from "../utils/jwt";
import { serialize } from "hono/utils/cookie";

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

  const signinSchema = z.object({
    email: z.string().email(),
    password: z.string()
  })

        
  authRouter.basePath('/auth')
  .post(
    '/signup',
    zValidator('json', signupSchema),
    async (ctx) => {

      try {
        const data = ctx.req.valid('json');

      // On vérifie que l'email et le pseudonyme n'existent pas déjà en BDD
      const userExists = await prisma.utilisateur.findFirst({
        where: {
          OR: [
            { email: data.email },
            { pseudonyme: data.pseudonyme }
          ]
        }
      });
        // Si l'utilisateur existe déjà, on renvoie une erreur 409
        if (userExists) {
            throw new HTTPException(409, {
              message: 'User already exists'
            })
          };
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
        }); 
        const accessToken = await generateAccessToken(user);

        return ctx.json({
          user,
          accessToken   
      });
      } catch (error) {
        console.error('Erreur création compte :', error);
        return ctx.json({ error: 'Une erreur est survenue lors de la création du compte' }, 500);
      }
      
    })

    .post(
        '/signin',
        zValidator('json', signinSchema),
        async (ctx) => {

          try {
            const data = ctx.req.valid('json');
    
            const userFound = await prisma.utilisateur.findUnique({
              where: {
                email: data.email,
              
                }
              });
          //   Si erreur d'identifiants ou utilisateur introuvable
          if(!userFound) {
            throw new HTTPException(401, {
              message: 'Identifiants invalides'
            })
          };
          //   On vérifie le password en bdd avec celui saisie par l'utilisateur
          const passwordMatch = await argon2.verify(userFound.password, data.password);
    
          if(!passwordMatch) {
            throw new HTTPException(401, {
              message: 'Identifiants invalides'
            })
          };
    
          const accessToken = await generateAccessToken({ id: userFound.id });

          ctx.header('Set-Cookie', serialize('access_token', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 2,
          }));
    
          return ctx.json({
            message: 'Connexion réussie',
            user: {
              id: userFound.id,
              pseudonyme: userFound.pseudonyme,
              email: userFound.email
            }
          });
          } catch (error) {
            console.error('Erreur accès compte :', error);
            return ctx.json({ error: 'Une erreur est survenue lors de l\'accès au compte' }, 500);
          }          
        });
    
 

  export default authRouter;