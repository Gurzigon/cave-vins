import { Hono } from "hono"
import { prisma } from "../utils/prisma";

const wineRouter = new Hono()

wineRouter.basePath('/wines')

// Récupérer tous les vins
  .get('/', async (ctx) => {

        const users = await prisma.vin.findMany();
       
        return ctx.json(users);
  })

// Récupérer un vin par son id
.get(
    '/:id',  async (ctx) => {
    
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




  export default wineRouter;