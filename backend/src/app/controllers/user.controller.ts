import { RouterContext, helpers } from "../../../deps.ts";

/* import { IUser } from "../types/user.type.ts"; */
/* import { ICreateUser } from "../types/create-user.type.ts"; */
import services from "../services/services.module.ts";
import repositories from "../repositories/repositories.module.ts";
import { db } from "../db/db.ts";

/* export default async ({ response }) => { */
/*   response.body = await getUsers(); */
/* } */

// TODO UPDATE -- Still broken. Can't get a DB connection query to work.
// TODO Can I add any more type safety?
const getUsers = async (ctx: RouterContext) => {
  // TODO Do I add services to ctx.state? Or do I scrap the whole ctx.state object property?
  /* ctx.response.body = Array.from(ctx.state.services.user.getUsers()); */
  // ERROR: As soon as I add services then it ConnectionRefused. Something up with Promises...
  ctx.response.body = "/users REACHED!";
  // ctx.response.body = repositories.user.getUsers; // ERROR

  // ctx.response.body = await services.user.getUsers();  // ERROR
  // ctx.response.body = services.user.getUsers(); // ERROR
  // ctx.response.body = repositories.user.getUsers();
};

/* const getUsers = async (ctx: RouterContext) => { */
/*   await db.connect(); */
/*   const result = await db.query("SELECT * FROM users;"); */
/*   ctx.response.body = result.rows; */
/*   await db.end(); */
/* }; */

const getUserById = async (ctx: RouterContext) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = ctx.state.services.user.getUserById(userId);
};

export default {
  getUsers,
  getUserById,
};
