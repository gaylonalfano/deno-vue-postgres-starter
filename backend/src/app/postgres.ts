import { Client } from "https://deno.land/x/postgres/mod.ts";
import config from "./config/config.ts";

// Adding in my Docker PG credentials:
async function main() {
  const client = new Client({
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    hostname: config.DB_HOST,
    port: +config.DB_PORT,
    /* user: "postgres", */
    /* password: "postgres", */
    /* database: "deno_postgres_db", */
    /* hostname: "localhost", */
    /* port: 5432, */
  });
  await client.connect();
  console.log("Connected");
  const result = await client.query("SELECT * FROM users LIMIT 1;");
  console.log(result.rows);
  await client.end();
}

main();
