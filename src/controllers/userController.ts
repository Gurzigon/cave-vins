import { Hono } from "hono"
import { prisma } from "../utils/prisma";

const userRouter = new Hono();

userRouter.basePath('/users')

// Routes pour faciliter le dev et tests
.get('/', async (ctx) => {

    const users = await prisma.utilisateur.findMany();
   
    return ctx.json(users);
})



export default userRouter;
