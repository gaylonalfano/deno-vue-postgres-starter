import { Application } from "./deps.ts";

import models from "./models/models.module.ts";
import routes from "./routes/routes.module.ts";

const port = 8000;
const app = new Application();

app.use(async (ctx, next) => {
  ctx.state = {
    models: models,
    // pseudo authenticated user
    me: models.users.get("1"),
  };

  await next();
});

app.use(routes.session.allowedMethods());
app.use(routes.session.routes());
app.use(routes.user.allowedMethods());
app.use(routes.user.routes());
app.use(routes.message.allowedMethods());
app.use(routes.message.routes());

await app.listen({ port });
