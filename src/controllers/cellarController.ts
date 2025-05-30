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

const router = cellarRouter

router.get('/',jwtAuth, async (ctx) => {
  const userId = ctx.req.header('x-user-id');
  try{
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
  }catch (error){
    console.error('Erreur récupération des caves :', error);
    return ctx.json({ error: 'Une erreur est survenue lors de la récupération des caves' }, 500);
  }

   
})

router.get(
    '/:id', jwtAuth,  async (ctx) => {
      const userId = ctx.req.header('x-user-id');
      const id = ctx.req.param('id');

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
            };
        
            return ctx.json(cellarById);
          } catch (error) {
            console.error('Erreur récupération d\'une cave :', error);
            return ctx.json({ error: 'Une erreur est survenue lors de la récupération de la cave.' }, 500);
          }
        })

router.post(
    '/',jwtAuth,
    zValidator('json',cellarSchema),
        async(ctx) => {
            const data = ctx.req.valid('json');
            const userId = ctx.req.header('x-user-id');
            if (!userId) {
                throw new HTTPException(400, {
                    message: 'ID utilisateur manquant'
                });
                };
            try {
              const cellarCreated = await prisma.cave.create({
                data : {
                    ...data,
                    utilisateurId: userId
                }
            });
              return ctx.json(cellarCreated)
            } catch (error) {
              console.error('Erreur création cave :', error);
              return ctx.json({ error: 'Une erreur est survenue lors de la création de la cave.' }, 500);
            }            
        })

router.patch(
    '/:id', jwtAuth,
    zValidator('json', cellarSchema.partial()), 
    zValidator('param', idParamSchema), 
        async (ctx) => {
            const data = ctx.req.valid('json');
            const { id } = ctx.req.valid('param');

            try {
              // On vérifie que la cave existe
            const cellarExists = await prisma.cave.findUnique({
              where: { id }
              });
              if (!cellarExists) {
              throw new HTTPException(404, {
                  message: 'Cellar not found'
              })
              };
              
              // On modifie la cave en BDD
              const cellarCreated = await prisma.cave.update({
              where: { id },
              data
              });
  
              return ctx.json(cellarCreated)
            } catch (error) {
              console.error('Erreur modification cave :', error);
              return ctx.json({ error: 'Une erreur est survenue lors de la modiciation de la cave.' }, 500);
            }            
        })

router.delete(
      '/:id',
      zValidator('param', idParamSchema),
      async (ctx) => {
            const userId = ctx.req.header('x-user-id');
            const { id } = ctx.req.valid('param');
            try {        
                if (!userId) {
                return ctx.json({ error: "Utilisateur non authentifié" }, 401);
              };
        
              // On vérifie que la cave existe
              const cellar = await prisma.cave.findUnique({
                where: { id },
              });
        
              if (!cellar) {
                return ctx.json({ error: 'Cave introuvable' }, 404);
              };
        
              // On vérifie que la cave appartient à l'utilisateur
              if (cellar.utilisateurId !== userId) {
                return ctx.json({ error: 'Accès interdit à cette cave' }, 403);
              };
        
              await prisma.cave.delete({
                where: { id },
              });
        
              return ctx.json({ message: 'Cave supprimée' });
        
            } catch (error) {
              console.error('Erreur suppression cave :', error);
              return ctx.json({ error: 'Une erreur est survenue lors de la suppression de la cave' }, 500);
            }
          }
        );
        

export default cellarRouter;