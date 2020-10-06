import { RouterContext } from "../../../deps.ts";

import services from "../services/services.module.ts";

const getMessages = async (ctx: RouterContext) => {
  const messages = await services.message.getMessages();
  ctx.response.body = messages;
};

export default {
  getMessages,
};
