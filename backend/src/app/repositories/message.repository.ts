import { runQuery } from "../db/db.ts";
import IMessage from "../types/message.type.ts";

// Perform basic db operation
// TODO Strengthen type checking?
const getMessages = async () => {
  const result = await runQuery({
    text: `
    SELECT * FROM messages;
    `,
  });

  return result.rowsOfObjects();
};

const getMessageById = async (id: number): Promise<IMessage | null> => {
  const result = await runQuery({
    text: `
    SELECT *
    FROM messages
    WHERE id = $1;
    `,
    args: [id],
  });

  return result.rows.length ? result.rows[0] : null;
};

export default {
  getMessages,
  getMessageById,
};
