import { Knex } from "knex";

const TABLE_NAME = "Restaurants";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.uuid("Id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("Name").notNullable();
    table.string("Culinary").notNullable();
    table.string("StreetAddress").notNullable();
    table.integer("NumberAddress").notNullable();
    table.string("District").notNullable();
    table.string("Phone").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
