// https://github.com/asad-mlbd/deno-api-starter-oak/blob/master/services/user.service.ts
import repositories from "../repositories/repositories.module.ts";
import { httpErrors } from "../../../deps.ts";

const getUsers = async () => {
  const users = await repositories.user.getUsers();
  // Do more data/business logic transformations here if needed
  return users;
};

const getUserById = async (id: number) => {
  const user = await repositories.user.getUserById(id);
  if (!user) {
    throw new httpErrors.NotFound("User not found");
  }

  return user;
};

export default {
  getUserById,
  getUsers,
};
