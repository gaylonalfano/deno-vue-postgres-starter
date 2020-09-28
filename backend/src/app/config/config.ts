// TODO Find out how to connect to my PG DB inside Docker from config
// Check out: https://stackoverflow.com/questions/37694987/connecting-to-postgresql-in-a-docker-container-from-outside
import { ConnectionOptions, envConfig } from "../../../deps.ts";

// Following: https://github.com/22mahmoud/deno_crud_jwt/blob/master/src/config.ts
envConfig();

const dbConfig: ConnectionOptions = {
  hostname: Deno.env.get("DB_HOST"),
  port: +Deno.env.get("DB_PORT")!,
  user: Deno.env.get("DB_USER"),
  database: Deno.env.get("DB_DATABASE"),
  password: Deno.env.get("DB_PASSWORD"),
};

// TODO Could create a custom Config interface: https://github.com/22mahmoud/deno_crud_jwt/blob/master/src/types.ts
const config = {
  dbConfig,
  jwtSecret: Deno.env.get("JWT_TOKEN_SECRET")!,
};

export default config;
