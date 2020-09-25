import { Application, Router } from "./deps.ts";

import models from "./models/models.module.ts";
import routes from "./routes/index.ts";

const port = 8000;
const app = new Application();

// Leverage the ctx.state object property
app.use(async (ctx, next) => {
  ctx.state = {
    models: models,
    me: models.users.get("1"),
  };

  await next();
});
