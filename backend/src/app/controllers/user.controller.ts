import { RouterContext, helpers } from "../../../deps.ts";

/* import { IUser } from "../types/user.type.ts"; */
/* import { ICreateUser } from "../types/create-user.type.ts"; */
/* import services from "../services/services.module.ts"; */

/* export default async ({ response }) => { */
/*   response.body = await getUsers(); */
/* } */

// TODO Can I add any more type safety?
const getUsers = async (ctx: RouterContext) => {
  // TODO Do I add services to ctx.state? Or do I scrap the whole ctx.state object property?
  ctx.response.body = Array.from(ctx.state.services.user.getUsers());
};

const getUserById = async (ctx: RouterContext) => {
  const { userId } = helpers.getQuery(ctx, { mergeParams: true });
  ctx.response.body = ctx.state.services.user.getUserById(userId);
};

export default {
  getUsers,
  getUserById,
};
