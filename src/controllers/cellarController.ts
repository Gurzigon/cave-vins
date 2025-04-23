import { Hono } from "hono"
import { prisma } from "../utils/prisma";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { HTTPException } from "hono/http-exception";
import { jwtAuth } from "../middleware/jwtAuth";

const cellarRouter = new Hono();

const cellarSchema = z.object({    
    nom: z.string()
  });

const idParamSchema = z.object({
    id: z.string().cuid(),
})

cellarRouter.basePath('/cellar')

.get('/',jwtAuth, async (ctx) => {
  const userId = ctx.req.header('x-user-id');

    const cellars = await prisma.cave.findMany({
      where: {
        utilisateurId: userId,
      },
        include: {
          CaveVin: {
            include: {
              vin: true 
            }
          }
        }
      });
   
    return ctx.json(cellars);
})

.get(
    '/:id', jwtAuth,  async (ctx) => {
      const userId = ctx.req.header('x-user-id');
        const id = ctx.req.param('id') 
        if (!id) {
          return ctx.json({ error: 'L\'ID fourni n\'est pas valide.' }, 400);
        }
        try {
            const cellarById = await prisma.cave.findUnique({
              where: {
                utilisateurId: userId,
                id: id,
              },
            });
        
            if (!cellarById) {
              return ctx.json({ error: 'Cave introuvable.' }, 404);
            }
        
            return ctx.json(cellarById);
          } catch (error) {
            return ctx.json({ error: 'Une erreur est survenue lors de la récupération de la cave.' }, 500);
          }
        })

.post(
    '/',jwtAuth,
    zValidator('json',cellarSchema),
        async(ctx) => {
            const data = ctx.req.valid('json')

            const userId = ctx.req.header('x-user-id')
            if (!userId) {
                throw new HTTPException(400, {
                    message: 'ID utilisateur manquant dans les headers'
                });
                }

            const cellarCreated = await prisma.cave.create({
                data : {
                    ...data,
                    utilisateurId: userId
                }
            })
            return ctx.json(cellarCreated)
        })

.patch(
    '/:id', jwtAuth,
    zValidator('json', cellarSchema.partial()), 
    zValidator('param', idParamSchema), 
        async (ctx) => {
            const data = ctx.req.valid('json')
            const { id } = ctx.req.valid('param')

            // On vérifie que le post existe
            const postExists = await prisma.cave.findUnique({
            where: { id }
            })
            if (!postExists) {
            throw new HTTPException(404, {
                message: 'Post not found'
            })
            }

            const postCreated = await prisma.cave.update({
            where: { id },
            data
            })

            return ctx.json(postCreated)
        }
        )

.delete(
    '/:id',
    zValidator('param', idParamSchema),
        async (ctx) => {
            const { id } = ctx.req.valid('param')

            // On vérifie que la cave existe
            const cellarExists = await prisma.cave.findUnique({
                where: { id }
            })
            if (!cellarExists) {
                throw new HTTPException(404, {
                message: 'Cave introuvable'
                })
            }

            await prisma.cave.delete({
                where: { id }
            })
            return ctx.json({
                message: 'Cave supprimée'
            })
            }
        )


  

export default cellarRouter