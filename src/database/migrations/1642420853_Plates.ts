import { Knex } from "knex";

const TABLE_NAME = "Plates";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.uuid("Id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("Name").notNullable();
    table.string("Description").notNullable();
    table
      .uuid("RestaurantId")
      .notNullable()
      .references("Id")
      .inTable("Restaurants")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.double("Price").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(TABLE_NAME);
}
