import { Pool, PoolClient, QueryConfig, QueryResult } from "../../../deps.ts";
import config from "../config/config.ts";

/* const dbClient = new PostgresClient(config.dbConfig); */
// https://deno-postgres.com/#/?id=connection-management
const POOL_CONNECTIONS = 20;
const dbPool = new Pool(config.dbConfig, POOL_CONNECTIONS);

async function runQuery(query: QueryConfig) {
  const client: PoolClient = await dbPool.connect();
  const result: QueryResult = await client.query(query);
  client.release();
  return result;
}

/* const db = await dbClient.connect(); */
/* export default { dbClient }; */
// TODO Not sure if this is how I should modularize this
// but this function contains all the reusable parts I believe.
export { runQuery };
