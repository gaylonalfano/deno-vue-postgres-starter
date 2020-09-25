import { Router, RouterContext, helpers, v4 } from "../deps.ts";

const router = new Router();

// TODO Could later replace with dedicated Controllers functions
router.get("/messages", (ctx: RouterContext) => {
  ctx.response.body = Array.from(ctx.state.models.messages.values());
});

router.get("/messages/:messageId", (ctx: RouterContext) => {
  const { messageId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = ctx.state.models.messages.get(messageId);
});

router.post("/messages", async (ctx: RouterContext) => {
  // Generating an id since we're not connected to a DB yet
  const id = v4.generate();

  // NOTE: .body() isn't async. value is now a promise
  const { value } = ctx.request.body({ type: "json" });
  const { text } = await value;

  // Add to Map (our database)
  ctx.state.models.messages.set(id, {
    id,
    text,
    userId: ctx.state.me.id,
  });

  ctx.response.body = ctx.state.models.messages.get(id);
});

// TODO Implement update operation. Permissions is a key component.
// Should only allow authenticated user (me) who is creator of the message

router.delete("/messages/:messageId", async (ctx: RouterContext) => {
  const { messageId } = helpers.getQuery(ctx, { mergeParams: true });
  const isDeleted = ctx.state.models.messages.delete(messageId);

  ctx.response.body = isDeleted;
});

export default router;
