import { runQuery } from "../db/db.ts";
/* import IMessage from "../types/message.type.ts"; */

// Perform basic db operation
const getMessages = async () => {
  const messages = await runQuery({
    text: `
    SELECT * FROM messages;
    `,
  });

  return messages.rowsOfObjects();
};

export default {
  getMessages,
};
