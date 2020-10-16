/*import { AbstractMigration, Info } from "https://deno.land/x/nessie/mod.ts"; */
/*// import Dex from "https://deno.land/x/dex/mod.ts"; */

/*export default class ExperimentalMigration extends AbstractMigration { */
/*  /1** Runs on migrate *1/ */
/*  async up(info: Info): Promise<void> { */
/*    this.client.query("CREATE TABLE table1 (id int)"); */
/*  } */

/*  /1** Runs on rollback *1/ */
/*  async down(info: Info): Promise<void> { */
/*    this.client.query("DROP TABLE table1"); */
/*  } */
/*} */

/*// Minor tweaks from default following this example: */
/*// https://github.com/halvardssm/deno-nessie */
/*import { AbstractMigration, Info } from "https://deno.land/x/nessie/mod.ts"; */
/*import type { Client } from "https://deno.land/x/postgres@v0.4.5/mod.ts"; */

/*export default class ExperimentalMigration extends AbstractMigration<Client> { */
/*  /1** Runs on migrate *1/ */
/*  async up({ dialect }: Info): Promise<void> { */
/*    this.client.query("CREATE TABLE table1 (id int)"); */
/*  } */

/*  /1** Runs on rollback *1/ */
/*  async down({ dialect }: Info): Promise<void> { */
/*    this.client.query("DROP TABLE table1"); */
/*  } */
/*} */

// Following example: https://github.com/halvardssm/deno-nessie/blob/master/examples/migration-class-experimental.ts
import type { Info } from "https://deno.land/x/nessie/mod.ts";
import { AbstractMigration } from "https://deno.land/x/nessie/wrappers/AbstractMigration.ts";
import type { Client } from "https://deno.land/x/postgres@v0.4.5/mod.ts";
import Dex from "https://deno.land/x/dex/mod.ts";

export default class ExperimentalMigration extends AbstractMigration<Client> {
  async up({ dialect }: Info): Promise<void> {
    const query = Dex({ client: dialect }).schema.createTable(
      "test",
      (table: any) => {
        table.bigIncrements("id").primary();
        table.string("file_name", 100).unique();
        table.timestamps(undefined, true);
      },
    );

    this.client.query(query);

    this.client.query(
      'insert into test (file_name) values ("test1"), ("test2")',
    );

    const res = await this.client.query("select * from test");

    for await (const row of res.rowsOfObjects()) {
      this.client.query(
        `update test set file_name = ${row.file_name +
          "_some_suffix"} where id = ${row.id}`,
      );
    }
  }

  async down({ dialect }: Info): Promise<void> {
    const query = Dex({ client: dialect }).schema.dropTable("test");

    this.client.query(query);
  }
}
