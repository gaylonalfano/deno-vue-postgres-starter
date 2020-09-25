import { Router, RouterContext } from "../deps.ts";

import models from "../models/models.module.ts";

const router = new Router();

// TODO Could later replace with dedicated Controllers functions
router.get("/messages", (ctx: RouterContext) => {
  ctx.response.body = Array.from(models.messages.values());
});

export default router;
