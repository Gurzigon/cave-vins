import { Hono } from "hono"
import { prisma } from "../utils/prisma";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import type { Vin } from "../../prisma/src/generated/prisma";
import { jwtAuth } from "../middleware/jwtAuth";


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

wineRouter.basePath('/wines')

// Récupérer tous les vins
  .get('/',jwtAuth, async (ctx) => {

        const users = await prisma.vin.findMany();
       
        return ctx.json(users);
  })

// Récupérer un vin par son id
.get(
    '/:id', jwtAuth,  async (ctx) => {
    
        const id = ctx.req.param('id') 
        if (!id) {
          return ctx.json({ error: 'L\'ID fourni n\'est pas valide.' }, 400);
        }
        try {
            const wineById = await prisma.vin.findUnique({
              where: {
                id: id,
              },
            });
        
            if (!wineById) {
              return ctx.json({ error: 'Vin introuvable.' }, 404);
            }
        
            return ctx.json(wineById);
          } catch (error) {
            return ctx.json({ error: 'Une erreur est survenue lors de la récupération du vin.' }, 500);
          }
        })

  
.post(
          '/',jwtAuth,
  zValidator('json', wineSchema),
  async (ctx) => {
    const data = ctx.req.valid('json');
    const userId = ctx.req.header('x-user-id');

    if (!userId) {
      return ctx.json({ error: 'Utilisateur non authentifié' }, 401);
    }

    // 1. On récupère la cave de l'utilisateur
    const userCave = await prisma.cave.findFirst({
      where: {
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
        caveId: userCave.id,
        vinId: vin.id
      }
    });
    console.log(vin)
    return ctx.json({ vin });
  }
  );   

export default wineRouter;