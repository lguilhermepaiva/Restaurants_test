import { Knex } from 'knex';

const TABLE_NAME = 'Restaurants';
const COLUMN = 'UrlImage';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.text(COLUMN).defaultTo('').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.dropColumn(COLUMN);
  });
}
