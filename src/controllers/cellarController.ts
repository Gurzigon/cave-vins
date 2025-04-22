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

    const users = await prisma.cave.findMany();
   
    return ctx.json(users);
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


  

export default cellarRouter