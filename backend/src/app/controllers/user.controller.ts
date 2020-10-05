import { RouterContext, helpers } from "../../../deps.ts";

import services from "../services/services.module.ts";

// TODO Can I add any more type safety?
const getUsers = async (ctx: RouterContext) => {
  // TODO Do I add services to ctx.state? Or do I scrap the whole ctx.state object property?
  /* const users = await ctx.state.services.user.getUsers(); */
  const users = await services.user.getUsers();
  ctx.response.body = users;
};

const getUserById = async (ctx: RouterContext) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const user = await services.user.getUserById(+id);
  ctx.response.body = user;
};

export default {
  getUsers,
  getUserById,
};
