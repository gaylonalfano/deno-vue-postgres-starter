import { Router, RouterContext, helpers } from "../deps.ts";

const router = new Router();

// TODO Could later replace with dedicated Controllers functions
router.get("/messages", (ctx: RouterContext) => {
  ctx.response.body = Array.from(ctx.state.models.messages.values());
});

router.get("/messages/:messageId", (ctx: RouterContext) => {
  const { messageId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = ctx.state.models.messages.get(messageId);
});

export default router;
