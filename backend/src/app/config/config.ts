import { envConfig } from "../../../deps.ts";
const config = envConfig();

export default config;

// ============= Below is when I was using Client (NOT PoolClient)! ========
/* // TODO Find out how to connect to my PG DB inside Docker from config */
/* // Check out: https://stackoverflow.com/questions/37694987/connecting-to-postgresql-in-a-docker-container-from-outside */
/* import { envConfig } from "../../../deps.ts"; */

/* // Following: https://github.com/22mahmoud/deno_crud_jwt/blob/master/src/config.ts */
/* envConfig(); */

/* const dbConfig: ConnectionOptions = { */
/*   user: Deno.env.get("DB_USER"), */
/*   password: Deno.env.get("DB_PASSWORD"), */
/*   database: Deno.env.get("DB_DATABASE"), */
/*   hostname: Deno.env.get("DB_HOST"), */
/*   port: +Deno.env.get("DB_PORT")!, */
/* }; */

/* // TODO Could create a custom Config interface: https://github.com/22mahmoud/deno_crud_jwt/blob/master/src/types.ts */
/* const config = { */
/*   dbConfig, */
/*   jwtSecret: Deno.env.get("JWT_TOKEN_SECRET")!, */
/* }; */

/* export default config; */
