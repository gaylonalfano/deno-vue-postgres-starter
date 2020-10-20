import { assertEquals } from "../deps.ts";


Deno.test({
  name: "testing example",
  fn(): void {
    assertEquals("world", "world");
    assertEquals({ hello: "world"}, { hello: "world" });
  },
});


Deno.test("server_root_get_request_text_with_fetch", async () => {
  const res = await fetch('http://localhost:8000/');
  /* const data = await res.json(); */
  const data = await res.text();
  const status = await res.status;
  console.log(status);
  console.log(`Here's the data: ${data}`);
  assertEquals("Hello world!", data);
});

Deno.test("server_root_get_request_json_with_fetch", async () => {
  const res = await fetch('http://localhost:8000/',{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  /* const data = await res.text(); */
  const status = await res.status;
  console.log(status);
  console.log(`Here's the data: ${data}`);
  assertEquals("Hello world!", data);
});
