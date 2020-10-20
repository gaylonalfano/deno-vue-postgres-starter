import { assertArrayContains, assertEquals } from "../deps.ts";

Deno.test("get_users_request_json", async () => {
  const res = await fetch('http://localhost:8000/users',{
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  const status = await res.status;
  assertEquals(status, 200);
  assertArrayContains(data, [{"id":1,"username":"Gaylon"}]);
});

