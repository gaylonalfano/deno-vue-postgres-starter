import { Client } from "https://deno.land/x/postgres@v0.4.5/mod.ts";
import config from "./config/config.ts";

// Adding in my Docker PG credentials:
// WORKS:
/* async function main() { */
/*   const client = new Client({ */
/*     user: config.DB_USER, */
/*     password: config.DB_PASSWORD, */
/*     database: config.DB_DATABASE, */
/*     hostname: config.DB_HOST, */
/*     port: +config.DB_PORT, */
/*     /1* user: "postgres", *1/ */
/*     /1* password: "postgres", *1/ */
/*     /1* database: "deno_postgres_db", *1/ */
/*     /1* hostname: "localhost", *1/ */
/*     /1* port: 5432, *1/ */
/*   }); */
/*   await client.connect(); */
/*   console.log("Connected"); */
/*   const result = await client.query("SELECT * FROM users LIMIT 1;"); */
/*   console.log(result.rows); */
/*   await client.end(); */
/* } */

/* main(); */

const dbClient = new Client({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  hostname: config.DB_HOST,
  port: +config.DB_PORT,
});

await dbClient.connect();
/* console.log("Connected"); */
/* const result = await dbClient.query("SELECT * FROM users;"); */
/* console.log(result.rows); */

export default dbClient;
