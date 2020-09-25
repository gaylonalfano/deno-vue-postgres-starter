import { Router, RouterContext } from "../deps.ts";

import models from "../models/models.module.ts";

const router = new Router();

// TODO Could later replace with dedicated Controllers functions
// RouterContext needed???
router.get("/users", (ctx: RouterContext) => {
  ctx.response.body = Array.from(models.users.values());
});

export default router;
