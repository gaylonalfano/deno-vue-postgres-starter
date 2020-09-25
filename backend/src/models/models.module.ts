import users from "./user.model.ts";
import messages from "./message.model.ts";

// TODO When we add a database, we can refactor our models
// to actual database interfaces later.
// https://www.robinwieruch.de/deno-oak-rest-api
export default {
  users,
  messages,
};
