import { Knex } from 'knex';

const TABLE_NAME = 'Users';

const UserFred = [
  {
    Email: 'fred@graodireto.com.br',
    Password:
      '$argon2i$v=19$m=4096,t=3,p=1$Q2fF1tSma9oQTCx2MQkOyA$QmaLaNubuNdmQGYsnFvuXEu4ZeO56nbSnxJfHzBQ6n0',
  },
];
export async function up(knex: Knex): Promise<void> {
  await knex.insert(UserFred).table(TABLE_NAME);
}

export async function down(): Promise<void> {}
