import repositories from "../repositories/repositories.module.ts";
import { httpErrors } from "../../../deps.ts";

const getMessages = async () => {
  const messages = repositories.message.getMessages();
  return messages;
};

const getMessageById = async (id: number) => {
  const message = repositories.message.getMessageById(id);
  if (!message) {
    throw new httpErrors.NotFound("Message not found");
  }
  return message;
};

export default {
  getMessages,
  getMessageById,
};
