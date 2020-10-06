import repositories from "../repositories/repositories.module.ts";

const getMessages = async () => {
  const messages = repositories.message.getMessages();
  return messages;
};

export default {
  getMessages,
};
