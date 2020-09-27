import { Router, RouterContext, helpers, v4 } from "../../../deps.ts";

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
// Example: https://github.com/asad-mlbd/deno-api-starter-oak/blob/ab2ce18accd5a3a0675d40793bd0489240c440ad/routes/user.routes.ts
router.put("/messages/:messageId", async (ctx: RouterContext) => {
  // Get message id from params
  const { messageId } = helpers.getQuery(ctx, { mergeParams: true });
  const message = ctx.state.models.messages.get(messageId);

  // Check if current userId is the same as the message.userId
  const currentUserId = ctx.state.me.id;

  if (currentUserId !== message.userId) {
    ctx.throw(401, `Current user: ${currentUserId} unauthorized to edit!`);
  } else {
    // Get the request data
    const { value } = ctx.request.body({ type: "json" });
    const { text } = await value;

    // Update our Map object (database entity)
    ctx.state.models.messages.set(messageId, {
      id: messageId,
      text: text,
      userId: currentUserId,
    });
  }

  // TODO What should I return? I think just a boolean...
  ctx.response.body = true;
});

router.delete("/messages/:messageId", async (ctx: RouterContext) => {
  const { messageId } = helpers.getQuery(ctx, { mergeParams: true });
  const isDeleted = ctx.state.models.messages.delete(messageId);

  ctx.response.body = isDeleted;
});

export default router;
