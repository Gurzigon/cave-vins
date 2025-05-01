import { Hono } from "hono"
import { prisma } from "../utils/prisma";

const userRouter = new Hono();

const router = userRouter;

// Routes pour faciliter le dev et tests
router.get('/', async (ctx) => {

    const users = await prisma.utilisateur.findMany();
   
    return ctx.json(users);
})



export default userRouter;
