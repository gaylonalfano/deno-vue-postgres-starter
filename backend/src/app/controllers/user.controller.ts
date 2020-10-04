import { RouterContext, helpers, log, PostgresClient } from "../../../deps.ts";
import config from "../config/config.ts";

/* import { IUser } from "../types/user.type.ts"; */
/* import { ICreateUser } from "../types/create-user.type.ts"; */
/* import services from "../services/services.module.ts"; */
/* import repositories from "../repositories/repositories.module.ts"; */
/* import { db } from "../db/db.ts"; */

/* export default async ({ response }) => { */
/*   response.body = await getUsers(); */
/* } */

/* // TODO UPDATE -- Still broken. Can't get a DB connection query to work. */
/* // TODO Can I add any more type safety? */
/* const getUsers = async (ctx: RouterContext) => { */
/*   // TODO Do I add services to ctx.state? Or do I scrap the whole ctx.state object property? */
/*   /1* ctx.response.body = Array.from(ctx.state.services.user.getUsers()); *1/ */
/*   // ERROR: As soon as I add services then it ConnectionRefused. Something up with Promises... */
/*   ctx.response.body = "/users REACHED!"; */
/*   // ctx.response.body = repositories.user.getUsers; // ERROR */
/*   // ctx.response.body = await services.user.getUsers();  // ERROR */
/*   // ctx.response.body = services.user.getUsers(); // ERROR */
/*   // ctx.response.body = repositories.user.getUsers(); */
/* }; */

const getUsers = async (ctx: RouterContext) => {
  // Try a direct DB connection
  const client = new PostgresClient({
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    hostname: config.DB_HOST,
    /* hostname: "178.28.0.2", */
    port: +config.DB_PORT,
  });

  console.log(client);
  log.debug(client);

  try {
    await client.connect();
    const result = await client.query("SELECT * FROM users;");
    /* const result = await db.query("SELECT * FROM users;"); */
    ctx.response.body = result.rows;
    /* ctx.response.body = result.rows; */
    await client.end();
  } catch (error) {
    log.error(error);
  }
};

const getUserById = async (ctx: RouterContext) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = ctx.state.services.user.getUserById(userId);
};

export default {
  getUsers,
  getUserById,
};
