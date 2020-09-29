// Basic database operations
/* Referencing a few resources: */
/*   - https://github.com/22mahmoud/deno_crud_jwt/blob/master/src/models/user.ts */
/*   - https://github.com/asad-mlbd/deno-api-starter-oak/blob/master/repositories/user.repository.ts */
import { runQuery } from "../db/db.ts";
import IUser from "../types/user.type.ts";
import ICreateUser from "../types/create-user.type.ts";

// TODO Get my IUser in here and start connecting to db to create a users table.
const getUserById = async (id: number): Promise<IUser | null> => {
  const result = await runQuery({
    text: `
      SELECT *
      FROM users
      WHERE id = ? LIMIT 0, 1
      `,
    args: [id],
  });
  return result.rows.length ? result.rows[0] : null;

  /* if (result.rowCount > 0) { */
  /*   return result.rows[0]; */
  /* } else { */
  /*   return null; */
  /* } */
};

const createUser = async (user: ICreateUser): Promise<IUser | null> => {
  const { username } = user;

  const result = await runQuery({
    text: "INSERT into users (username) VALUES ($1);",
    args: [username],
  });

  // TODO Not sure if rowCount is the right property and/or if I should use !
  return await getUserById(result.rowCount!);
};

export { getUserById, createUser };
