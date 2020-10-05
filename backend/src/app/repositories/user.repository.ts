// Basic DATABASE OPERATIONS
/* Referencing a few resources: */
/*   - https://github.com/22mahmoud/deno_crud_jwt/blob/master/src/models/user.ts */
/*   - https://github.com/asad-mlbd/deno-api-starter-oak/blob/master/repositories/user.repository.ts */
// TODO Could possibly look into using TS Generics one day
import { runQuery } from "../db/db.ts";
import IUser from "../types/user.type.ts";
import ICreateUser from "../types/create-user.type.ts";

// TODO What's the type to return? QueryResult.rows?
const getUsers = async () => {
  const result = await runQuery({
    text: `
      SELECT *
      FROM users;
    `,
  });
  return result.rowsOfObjects();
};

const getUserById = async (id: number): Promise<IUser | null> => {
  const result = await runQuery({
    text: `
      SELECT * 
      FROM users 
      WHERE id = $1;
    `,
    args: [id],
  });
  console.log(result.rows[0]);
  return result.rows.length ? result.rows[0] : null;
};

const createUser = async (user: ICreateUser): Promise<IUser | null> => {
  const { username } = user;

  const result = await runQuery({
    text: `
        INSERT INTO users (
          username
        ) 
        VALUES (
          $1
        );
      `,
    args: [username],
  });

  // TODO Not sure if rowCount is the right property and/or if I should use !
  // TODO How to extract the ID from the query result?
  /* return await getUserById(result.rowCount!); */
  return await getUserById(result.rows[-1].id);
};

export default { getUsers, getUserById, createUser };
