import { Hono } from "hono"
import { prisma } from "../utils/prisma";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import type { Vin } from "../../prisma/src/generated/prisma";
import { jwtAuth } from "../middleware/jwtAuth";
import { HTTPException } from "hono/http-exception";


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

const idParamSchema = z.object({
  id: z.string().cuid(),
})

wineRouter.basePath('/wines')

// Récupérer tous les vins
.get('/',jwtAuth,
  async(ctx) => {
    
    const userId = ctx.req.header('x-user-id');

    if(!userId){
      return ctx.json({error : "Utilisateur non authentifié"}, 401);
    }
    const cellars = await prisma.cave.findMany({
      where : {
        utilisateurId : userId
      },
      include : {
          CaveVin: {
              include: {
                vin: true,  // Inclut les vins associés via la table de jointure
              }
            }
      }
    });
    console.log("CAVES DE L'UTILISATEUR : ", JSON.stringify(cellars, null, 2));
    const vins = cellars.flatMap(cave => cave.CaveVin.map(caveVin => caveVin.vin));
    return ctx.json({vins})
  }
)

// Récupérer un vin par son id
.get(
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
            }
        
            return ctx.json(wineById);
          } catch (error) {
            return ctx.json({ error: 'Une erreur est survenue lors de la récupération du vin.' }, 500);
          }
        })

  
.post(
  '/:caveId',jwtAuth,
  zValidator('param', z.object({ caveId: z.string() })),
  zValidator('json', wineSchema),
  async (ctx) => {
    const data = ctx.req.valid('json');
    const userId = ctx.req.header('x-user-id');    
    const { caveId } = ctx.req.valid('param');

    console.log(caveId)

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
    console.log(userCave)

    if (!userCave) {
      return ctx.json({ error: "Aucune cave trouvée pour cet utilisateur" }, 404);
    }

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
    console.log(vin)
    return ctx.json({ vin });
  }
  )
  
  .delete(
    '/:id',jwtAuth,
    zValidator('param', idParamSchema),
    async (ctx) => {
      const { id } = ctx.req.valid('param')

      // On vérifie que le vin existe
      const wineExists = await prisma.vin.findUnique({
        where: { id }
      })
      if (!wineExists) {
        throw new HTTPException(404, {
          message: 'Vin introuvable'
        })
      }

      await prisma.vin.delete({
        where: { id }
      })
      return ctx.json({
        message: 'Vin supprimée'
      })
    }
  )

export default wineRouter;