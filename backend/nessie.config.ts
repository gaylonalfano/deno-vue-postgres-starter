// ====== Using default except for my config.ts creds =====
// https://github.com/halvardssm/deno-nessie/blob/master/examples/config-postgres.ts
import {
  ClientOptions,
  ClientPostgreSQL,
} from "https://deno.land/x/nessie/mod.ts";
import type { ConnectionOptions } from "https://deno.land/x/postgres@v0.4.5/connection_params.ts";
import config from "./src/app/config/config.ts";

const clientConfig: ClientOptions = {
  migrationFolder: "./src/app/db/migrations",
  seedFolder: "./src/app/db/seeds",
  experimental: true,
};

const connectionConfig: ConnectionOptions = {
  /* database: config.DB_DATABASE, */
  /* hostname: config.DB_HOST, */
  /* port: +config.DB_PORT, */
  /* user: config.DB_USER, */
  /* password: config.DB_PASSWORD, */
  database: "deno_postgres_db",
  hostname: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
};

export default {
  /* exposeQueryBuilder: true, */
  client: new ClientPostgreSQL(clientConfig, connectionConfig),
};

// ====== Using my deps.ts and config.ts (a lot of customization) ======
/*import { ClientOptions, ClientPostgreSQL, ConnectionOptions } from "./deps.ts"; */
/*import config from "./src/app/config/config.ts"; */

/*/1** These are the default config options. *1/ */
/*const nessieOptions: ClientOptions = { */
/*  migrationFolder: "./src/app/db/migrations", */
/*  seedFolder: "./src/app/db/seeds", */
/*  experimental: true, */
/*}; */

/*// Official example imports deno-postgres ConnectionOptions */
/*// https://github.com/halvardssm/deno-nessie/blob/master/examples/config-postgres.ts */
/*const connectionConfig: ConnectionOptions = { */
/*  database: config.DB_DATABASE, */
/*  hostname: config.DB_HOST, */
/*  port: +config.DB_PORT, */
/*  user: config.DB_USER, */
/*  password: config.DB_PASSWORD, */
/*}; */

/*const nessiePostgresClient = new ClientPostgreSQL( */
/*  nessieOptions, */
/*  connectionConfig */
/*); */

/*export default { */
/*  nessiePostgresClient, */
/*  /1* nessiePostgresClient: new ClientPostgreSQL(nessieOptions, connectionConfig), *1/ */
/*}; */

/*console.log(nessiePostgresClient); */

// ======= Default Generated example =======
// Generated nessie.config.ts
/*import { */
/*  ClientMySQL, */
/*  ClientOptions, */
/*  ClientPostgreSQL, */
/*  ClientSQLite, */
/*} from "https://deno.land/x/nessie/mod.ts"; */

/*/1** These are the default config options. *1/ */
/*const clientOptions: ClientOptions = { */
/*  migrationFolder: "./db/migrations", */
/*  seedFolder: "./db/seeds", */
/*  experimental: true, */
/*}; */

/*/1** Select one of the supported clients *1/ */
/*const clientPg = new ClientPostgreSQL(clientOptions, { */
/*  database: "nessie", */
/*  hostname: "localhost", */
/*  port: 5432, */
/*  user: "root", */
/*  password: "pwd", */
/*}); */

/*const clientMySql = new ClientMySQL(clientOptions, { */
/*  hostname: "localhost", */
/*  port: 3306, */
/*  username: "root", */
/*  // password: "pwd", // uncomment this line for <8 */
/*  db: "nessie", */
/*}); */

/*const clientSqLite = new ClientSQLite(clientOptions, "./sqlite.db"); */

/*/1** This is the final config object *1/ */
/*const config = { */
/*  client: clientPg, */
/*  // Defaults to false, if you want the query builder exposed in migration files, set this to true. */
/*  exposeQueryBuilder: false, */
/*}; */

/*export default config; */
