/* import { Client } from "https://deno.land/x/postgres/mod.ts"; */
/* import config from "./config/config.ts"; */
import dbClient from "./postgres.ts";

import {
  Application,
  log,
  /* PostgresClient, */
  Router,
  Context,
} from "../../deps.ts";

import models from "./models/models.module.ts";
import routes from "./routes/routes.module.ts";
import middlewares from "./middlewares/middlewares.module.ts";
import services from "./services/services.module.ts";

const port = 8000;
const app = new Application();

// TODO Research how logging is generally organized. Middleware? Config?
// Following https://github.com/asad-mlbd/deno-api-starter-oak/blob/master/app.ts
// Looks like I could create logger.middleware.ts, error.middleware.ts, and timing.middleware.ts
// Adding some logging from Deno course example
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },
  loggers: {
    // configure default logger available via methods above
    default: {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});

// Add event listener since app extends the EventType interface like browser
app.addEventListener("error", (event) => {
  // The final spot for error handling
  // Let's add the logging here
  log.error(event.error);
});

/* app.use(middlewares.errorMiddleware); */
/* app.use(middlewares.loggerMiddleware); */
/* app.use(middlewares.timingMiddleware); */

// Add our pseudo auth middleware
// TODO Can I add repositories or services to state property?
// IMPORTANT Adding services results in ConnectionRefused error for API service
/* app.use(async (ctx, next) => { */
/*   ctx.state = { */
/*     models: models, */
/*     /1* services: services, *1/ */
/*     // pseudo authenticated user */
/*     me: models.users.get("1"), */
/*     /1* me: services.user.getUserById(1), *1/ */
/*   }; */
/*   await next(); */
/* }); */

// TODO Adding DB client and basic /users handler here for
// testing purposes only. Can't connect to db via API so far...
const router = new Router();

router
  .get("/", (ctx: Context) => {
    ctx.response.body = "Home";
  })
  .get("/users", async (ctx: Context) => {
    try {
      const result = await dbClient.query("SELECT * FROM users LIMIT 1;");
      ctx.response.body = result.rows;
    } catch (error) {
      console.log(error);
      ctx.throw(error);
    }
  });

app.use(router.routes());
app.use(router.allowedMethods());

// Add router middleware
/* app.use(routes.session.allowedMethods()); */
/* app.use(routes.session.routes()); */
/* app.use(routes.user.allowedMethods()); */
/* app.use(routes.user.routes()); */
/* app.use(routes.message.allowedMethods()); */
/* app.use(routes.message.routes()); */

// Let's specify what to execute if ran as standalone module: "main": true
if (import.meta.main) {
  log.info(`Starting server on port ${port}...`);
  // Let's get our app server started and listening to specified port
  // Call await because app.listen is going to be an async function
  await app.listen({ port });
}
