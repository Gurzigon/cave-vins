import { Hono } from "hono"
import { prisma } from "../utils/prisma";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { jwtAuth } from "../middleware/jwtAuth";
import { HTTPException } from "hono/http-exception";
import type { Vin } from '@prisma/client';


const wineRouter = new Hono()

const wineSchema = z.object({  
  couleur :    z.string().min(1, "La couleur est requise"),
  annee  :     z.number(),
  appellation : z.string().optional(),
  nom  :       z.string().min(1, "Le nom du vin est requis"),  
  quantite   : z.number().int().min(0, "La quantité doit être un entier positif"),
  is_consumed: z.boolean(),
  favoris  :  z.boolean(),  
});

const updateWineSchema = z.object({  
  couleur :    z.string().min(1, "La couleur est requise"),
  annee  :     z.number(),
  appellation : z.string().optional(),
  nom  :       z.string().min(1, "Le nom du vin est requis"),  
  quantite   : z.number().int().min(0, "La quantité doit être un entier positif"),
  is_consumed: z.boolean(),
  favoris  :  z.boolean(),  
}).partial();

const idParamSchema = z.object({
  id: z.string().cuid(),
});

const router = wineRouter

// Récupérer tous les vins
router.get(
  '/',
  jwtAuth,
  async (ctx) => {
    try {
      const userId = ctx.req.header('x-user-id');

      if (!userId) {
        return ctx.json({ error: "Utilisateur non authentifié" }, 401);
      };

      const cellars = await prisma.cave.findMany({
        where: {
          utilisateurId: userId,
        },
        include: {
          CaveVin: {
            include: {
              vin: true,  
            }
          }
        }
      });

      console.log("CAVES DE L'UTILISATEUR : ", JSON.stringify(cellars, null, 2));

      const vins = cellars.flatMap(cave => cave.CaveVin.map(caveVin => caveVin.vin));

      return ctx.json({ vins });

    } catch (error) {
      console.error('Erreur récupération des vins :', error);
      return ctx.json({ error: 'Une erreur est survenue lors de la récupération des caves et vins' }, 500);
    }
  }
)


// Récupérer un vin par son id
router.get(
    '/:id', jwtAuth,  async (ctx) => {
      
        const id = ctx.req.param('id');
        const userId = ctx.req.header('x-user-id');

        if (!id) {
          return ctx.json({ error: 'L\'ID fourni n\'est pas valide.' }, 400);
        };

        try {
            const wineById = await prisma.vin.findUnique({
              where: { id },
              include: {
                  caveVins: {
                    include: {
                      cave: true
                    }
                  }
              }
            });
        
            if (!wineById) {
              return ctx.json({ error: 'Vin introuvable.' }, 404);
            };

            // Vérification que l'utilisateur possède le vin
            const belongsToUser = wineById.caveVins.some(cv => cv.cave.utilisateurId === userId);

            if (!belongsToUser) {
              return ctx.json({ error: 'Accès refusé.' }, 403);
            };
        
            return ctx.json(wineById);
          } catch (error) {
            console.error('Erreur récupération du vin :', error);
            return ctx.json({ error: 'Une erreur est survenue lors de la récupération du vin.' }, 500);
          }
        })

  
  router.post(
    '/:caveId', jwtAuth,
    zValidator('param', z.object({ caveId: z.string() })),
    zValidator('json', wineSchema),
    async (ctx) => {
      try {
        const data = ctx.req.valid('json');
        const userId = ctx.req.header('x-user-id');    
        const { caveId } = ctx.req.valid('param');  
        
        if (!userId) {
          return ctx.json({ error: 'Utilisateur non authentifié' }, 401);
        };
  
        // 1. On récupère la cave de l'utilisateur
        const userCave = await prisma.cave.findFirst({
          where: {
            id: caveId,
            utilisateurId: userId
          }
        });
        console.log(userCave);
  
        if (!userCave) {
          return ctx.json({ error: "Aucune cave trouvée pour cet utilisateur" }, 404);
        };
  
        // 2. On crée le vin
        const vin: Vin = await prisma.vin.create({
          data: {
            couleur: data.couleur,
            annee: data.annee,
            appellation: data.appellation,
            nom: data.nom,
            quantite: data.quantite,
            is_consumed: data.is_consumed,
            favoris: data.favoris
          }
        });
  
        // 3. On fait l'association dans la table intermédiaire
        await prisma.caveVin.create({
          data: {
            caveId: caveId,
            vinId: vin.id
          }
        });
        console.log(vin);
        return ctx.json({ vin });
  
      } catch (error) {
        console.error(error);
        console.error('Erreur création vin :', error); 
        return ctx.json({ error: 'Une erreur est survenue lors de la création du vin' }, 500);
      }
    })

  router.patch(
    '/:id', jwtAuth,
    zValidator('param', z.object({ id: z.string() })),  
    zValidator('json', updateWineSchema),  
    async (ctx) => {
      try {
        const data = ctx.req.valid('json');  
        const userId = ctx.req.header('x-user-id');  
        const { id } = ctx.req.valid('param');  
    
        if (!userId) {
          return ctx.json({ error: 'Utilisateur non authentifié' }, 401);
        };
  
        // 1. On récupère le vin à mettre à jour avec la cave associée
        const wineToUpdate = await prisma.vin.findUnique({
          where: {
            id: id,  
          },
          include: {
            caveVins: {
              include: {
                cave: true,  
              },
            },
          },
        });
  
        if (!wineToUpdate) {
          return ctx.json({ error: 'Vin introuvable' }, 404);
        };
  
        // 2. Vérification que l'utilisateur possède bien le vin via la cave
        const userOwnsWine = wineToUpdate.caveVins.some(caveVin => caveVin.cave.utilisateurId === userId);
  
        if (!userOwnsWine) {
          return ctx.json({ error: "Vous ne pouvez pas modifier ce vin" }, 403);
        };
  
        // 3. Mise à jour des informations du vin
        const updatedWine = await prisma.vin.update({
          where: { id: wineToUpdate.id },
          data: {
            ...data,  
          },
        });
  
        return ctx.json({ updatedWine });  
  
      } catch (error) {
        console.error('Erreur modification vin :', error);  
        return ctx.json({ error: 'Une erreur est survenue lors de la modification du vin' }, 500);
      }
    })
  
  
  router.delete(
    '/:id',jwtAuth,
    zValidator('param', idParamSchema),
    async (ctx) => {
      const userId = ctx.req.header('x-user-id');
      const { id } = ctx.req.valid('param');

      try {
        // Récupération du vin avec ses caves et utilisateurs
        const wine = await prisma.vin.findUnique({
          where: { id },
          include: {
            caveVins: {
              include: {
                cave: true
              }
            }
          }
        });
  
        if (!wine) {
          throw new HTTPException(404, {
            message: 'Vin introuvable'
          });
        };
  
        // Vérification que le vin appartient à l'utilisateur
        const belongsToUser = wine.caveVins.some(cv => cv.cave.utilisateurId === userId);
  
        if (!belongsToUser) {
          return ctx.json({ error: 'Accès refusé : ce vin ne fait pas partie de votre cave.' }, 403);
        };
  
        // Suppression du vin
        await prisma.vin.delete({
          where: { id }
        });
  
        return ctx.json({ message: 'Vin supprimé avec succès' });
  
      } catch (error) {
        console.error('Erreur suppression vin :', error);
        return ctx.json({ error: 'Une erreur est survenue lors de la suppression.' }, 500);
      }
    }
  );

export default wineRouter;