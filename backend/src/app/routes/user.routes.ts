import { Router, RouterContext, helpers } from "../../../deps.ts";

const router = new Router();

// TODO Could later replace with dedicated Controllers functions
router.get("/users", (ctx: RouterContext) => {
  ctx.response.body = Array.from(ctx.state.models.users.values());
});

router.get("/users/:userId", (ctx: RouterContext) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = ctx.state.models.users.get(userId);
});

export default router;
