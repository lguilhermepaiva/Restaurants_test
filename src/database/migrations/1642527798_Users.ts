import { Knex } from "knex";

const TABLE_NAME = "Users";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.uuid("Id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("Email").notNullable();
    table.string("Password").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
