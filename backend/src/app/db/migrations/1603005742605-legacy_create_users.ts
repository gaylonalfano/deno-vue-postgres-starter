/*// EXPERIMENTAL */
/*import { AbstractMigration, Info } from "https://deno.land/x/nessie/mod.ts"; */
/*// import Dex from "https://deno.land/x/dex/mod.ts"; */

/*export default class ExperimentalMigration extends AbstractMigration { */
/*  /1** Runs on migrate *1/ */
/*  async up(info: Info): Promise<void> { */
/*  } */

/*  /1** Runs on rollback *1/ */
/*  async down(info: Info): Promise<void> { */
/*  } */
/*} */

// LEGACY
import { Migration } from "https://deno.land/x/nessie/mod.ts";

export const up: Migration = () => {
  return "CREATE TABLE table1 (id int);";
}

export const down: Migration = () => {
  return "DROP TABLE table1";
}
