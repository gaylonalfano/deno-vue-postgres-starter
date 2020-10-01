import { Router, RouterContext } from "../../../deps.ts";
import controllers from "../controllers/controllers.module.ts";
/* import userRepo from "../repositories/user.repository.ts"; */

const router = new Router();

// TODO Could later replace with dedicated Controllers functions
router
  .get("/users", controllers.user.getUsers)
  /* .get("/users/", async (ctx: RouterContext) => { */
  /*   const users = await userRepo.getUsers(); */
  /*   ctx.response.body = users; */
  /* }); */
  .get("/users/:userId", controllers.user.getUserById);

/* router.get("/users", (ctx: RouterContext) => { */
/*   ctx.response.body = Array.from(ctx.state.models.users.values()); */
/* }); */

/* router.get("/users/:userId", (ctx: RouterContext) => { */
/*   const { userId } = helpers.getQuery(ctx, { mergeParams: true }); */
/*   ctx.response.body = ctx.state.models.users.get(userId); */
/* }); */

export default router;
