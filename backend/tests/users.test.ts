import { assertArrayContains, assertEquals } from "../deps.ts";
import repositories from "../src/app/repositories/repositories.module.ts";

Deno.test({
  name: "hello world",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});

Deno.test("get users", () => {
  const users = repositories.user.getUsers();
  assertArrayContains()
  return users;
});


/* Deno.test("get users", async () => { */
/*   const users = await repositories.user.getUsers(); */
/*   console.log(users); */
/* }); */
