import { RouterContext, helpers } from "../../../deps.ts";

import services from "../services/services.module.ts";

const getMessages = async (ctx: RouterContext) => {
  const messages = await services.message.getMessages();
  ctx.response.body = messages;
};

const getMessageById = async (ctx: RouterContext) => {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const message = await services.message.getMessageById(+id);
  ctx.response.body = message;
};
export default {
  getMessages,
  getMessageById,
};
