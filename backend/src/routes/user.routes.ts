import { Router } from "https://deno.land/x/oak@v6.2.0";

import models from "../models/models.module.ts";

const router = new Router();

// TODO Could later replace with dedicated Controllers functions
// RouterContext needed???
router.get("/users", (ctx) => {
  ctx.response.body = Array.from(models.users.values());
});
