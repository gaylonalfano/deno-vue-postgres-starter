import {
  Pool,
  PoolClient,
  QueryConfig,
  QueryResult,
  PostgresClient,
} from "../../../deps.ts";
import config from "../config/config.ts";

// https://deno-postgres.com/#/?id=connection-management
// https://github.com/asad-mlbd/deno-api-starter-oak/blob/ab2ce18accd5a3a0675d40793bd0489240c440ad/db/db.ts
const POOL_CONNECTIONS = 20;
const dbPool = new Pool(
  {
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    hostname: config.DB_HOST,
    port: +config.DB_PORT,
  },
  POOL_CONNECTIONS
);

// https://deno-postgres.com/#/?id=example
export async function runQuery(query: QueryConfig) {
  const client: PoolClient = await dbPool.connect();
  const dbResult: QueryResult = await client.query(query);
  client.release();
  return dbResult;
}

// Adding db client const for testing since pools are erroring
const db = new PostgresClient({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  hostname: config.DB_HOST,
  port: +config.DB_PORT,
});

await db.connect();

/* const db = await dbClient.connect(); */
/* export default { dbClient }; */
// TODO Not sure if this is how I should modularize this
// but this function contains all the reusable parts I believe.
export default db;
