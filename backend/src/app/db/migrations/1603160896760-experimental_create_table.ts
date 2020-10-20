import { AbstractMigration, Info } from "https://deno.land/x/nessie@v1.1.1/mod.ts";
// import Dex from "https://deno.land/x/dex/mod.ts";
import type { Client } from "https://deno.land/x/postgres@v0.4.5/mod.ts";

export default class ExperimentalMigration extends AbstractMigration {
  /** Runs on migrate */
  async up({ dialect }: Info): Promise<void> {
    this.client.query("CREATE TABLE experimental (id int)");
  }

  /** Runs on rollback */
  async down({ dialect }: Info): Promise<void> {
    this.client.query("DROP TABLE experimental");
  }
}
