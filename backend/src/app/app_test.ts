/* import { Client } from "https://deno.land/x/postgres/mod.ts"; */
/* import config from "./config/config.ts"; */
import dbClient from "./postgres.ts";

import { Application, Router, Context } from "../../deps.ts";

const port = 8000;
const app = new Application();

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

// Let's specify what to execute if ran as standalone module: "main": true
if (import.meta.main) {
  console.log(`Starting server on port ${port}...`);
  // Let's get our app server started and listening to specified port
  // Call await because app.listen is going to be an async function
  await app.listen({ port });
}
