import { Hono } from "hono"
import { prisma } from "../utils/prisma";
import { jwtAuth } from "../middleware/jwtAuth";

const accountRouter = new Hono()

accountRouter.basePath('/account')


.get('/mywines',jwtAuth,
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
  );

  export default accountRouter;