import { Application } from "./deps.ts";

/* import models from "./models/models.module.ts"; */
import routes from "./routes/routes.module.ts";

const port = 8000;
const app = new Application();

// Leverage the ctx.state object property
/* app.use(async (ctx, next) => { */
/*   ctx.state = { */
/*     models: models, */
/*     me: models.users.get("1"), */
/*   }; */

/*   await next(); */
/* }); */

app.use(routes.user.allowedMethods());
app.use(routes.user.routes());
app.use(routes.user.allowedMethods());
app.use(routes.user.routes());

await app.listen({ port });
