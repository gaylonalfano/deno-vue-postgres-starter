import { Router, RouterContext } from "../../../deps.ts";

const router = new Router();

router.get("/session", (ctx: RouterContext) => {
  ctx.response.body = ctx.state.models.users.get(ctx.state.me.id);
});

export default router;
