import { Application, log } from "./deps.ts";

import models from "./models/models.module.ts";
import routes from "./routes/routes.module.ts";

const port = 8000;
const app = new Application();

// Adding some logging from Deno course example
// TODO Research how logging is generally organized. Middleware? Config?
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

// Add error-handling middleware
app.use(async (ctx, next) => {
  // See if next() middleware has an error:
  try {
    await next();
  } catch (error) {
    log.error(error);
    ctx.response.body = "Internal server error.";
    throw error;
  }
});

// Add logging middleware
app.use(async (ctx, next) => {
  await next();
  // We now have access to the response.headers from downstream middleware
  const time = ctx.response.headers.get("X-Response-Time");
  log.info(`${ctx.request.method} ${ctx.request.url} ${time}`);
});

// Measure time it takes to respond to a request
app.use(async (ctx, next) => {
  const start = Date.now();
  // In between we use the power of next()
  // We're calling downstream middleware after we start timer and once the downstream
  // middleware completes, only then do we measure the delta
  await next();
  const delta = Date.now() - start;
  // Let's store this delta inside the response.headers so we can extract for logging
  // Need to convert to template string since delta: number
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

// Add our pseudo auth middleware
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

// Let's specify what to execute if ran as standalone module: "main": true
if (import.meta.main) {
  log.info(`Starting server on port ${port}...`);
  // Let's get our app server started and listening to specified port
  // Call await because app.listen is going to be an async function
  await app.listen({ port });
}
