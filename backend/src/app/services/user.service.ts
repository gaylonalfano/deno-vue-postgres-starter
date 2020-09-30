// https://github.com/asad-mlbd/deno-api-starter-oak/blob/master/services/user.service.ts
/* import userRepo from "../repositories/user.repository.ts"; */
import repositories from "../repositories/repositories.module.ts";
import { httpErrors } from "../../../deps.ts";

const getUserById = async (id: number) => {
  const user = await repositories.user.getUserById(id);
  if (!user) {
    throw new httpErrors.NotFound("User not found");
  }

  return user;
};

const getUsers = async () => {
  const users = await repositories.user.getUsers();
  return users;
};

export default {
  getUserById,
  getUsers,
};
