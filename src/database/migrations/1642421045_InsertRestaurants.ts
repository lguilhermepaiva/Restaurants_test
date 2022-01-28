import { Knex } from 'knex';

const TABLE_NAME = 'Restaurants';

const DataRestaurants = [
  {
    Name: 'Restaurante Sem Futuro',
    StreetAddress: 'Avenida João Carlos',
    NumberAddress: 293,
    District: 'Centro',
    Culinary: 'Comida Brasileira',
    Phone: '3434323434',
  },
  {
    Name: 'Restaurante Grande Harmonia',
    StreetAddress: 'Avenida Pedro Antonio',
    NumberAddress: 15,
    District: 'Parque São Geraldo',
    Culinary: 'Comida Nordestina',
    Phone: '3435615542',
  },
  {
    Name: 'Le Bisteca',
    StreetAddress: 'Rua Feliciano de Prata',
    NumberAddress: 1064,
    District: 'Bairro das Flores',
    Culinary: 'Culinária Francesa',
    Phone: '3433459028',
  },
  {
    Name: 'Takame',
    StreetAddress: 'Rua das Mangueiras',
    NumberAddress: 512,
    District: 'Boa Vista',
    Culinary: 'Comida Japonesa',
    Phone: '3433332187',
  },
  {
    Name: 'TACOmfome',
    StreetAddress: 'Rua Diego Fabrício',
    NumberAddress: 67,
    District: 'Nova Era',
    Culinary: 'Comida Mexicana',
    Phone: '3433568790',
  },
  {
    Name: 'Lanches e Pizzas Gabiru',
    StreetAddress: 'Avenida Guilherme Tavares',
    NumberAddress: 2091,
    District: 'Centro',
    Culinary: 'Lanches, pizzas e porções',
    Phone: '3434126751',
  },
];
export async function up(knex: Knex): Promise<void> {
  await knex.insert(DataRestaurants).table(TABLE_NAME);
}

export async function down(): Promise<void> {}
