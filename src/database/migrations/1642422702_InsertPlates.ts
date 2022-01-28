import { Knex } from 'knex';

const TABLE_NAME = 'Plates';

const DataRestaurants = [
  //Brasileira
  {
    Name: 'Strogonoff',
    Description: 'Arroz branco, strogonoff, batata palha',
    RestaurantId: 'a8bce873-0405-43a4-90c9-b5442bf323e0',
    Price: 22.9,
  },
  {
    Name: 'Quibebe de mandioca',
    Description: 'Arroz branco e quibebe de mandioca',
    RestaurantId: 'a8bce873-0405-43a4-90c9-b5442bf323e0',
    Price: 24.9,
  },
  {
    Name: 'Feijoada',
    Description: 'Arroz branco com feijoada',
    RestaurantId: 'a8bce873-0405-43a4-90c9-b5442bf323e0',
    Price: 19.9,
  },
  {
    Name: 'Galinhada',
    Description: 'Galinhada com vinagrete',
    RestaurantId: 'a8bce873-0405-43a4-90c9-b5442bf323e0',
    Price: 20.9,
  },
  {
    Name: 'Bife de filé',
    Description: 'Arroz branco, bife bovino e feijão de caldo',
    RestaurantId: 'a8bce873-0405-43a4-90c9-b5442bf323e0',
    Price: 22.9,
  },
  //Nordestina
  {
    Name: 'Moquequinha de surubim',
    Description: 'Arroz de côco, farofa de pão e banana da terra',
    RestaurantId: '17fa42c7-7480-4912-95ad-d4b43def63da',
    Price: 28.9,
  },
  {
    Name: 'Filé mignon do sol',
    Description: 'Arroz branco e carne de sol ao molho',
    RestaurantId: '17fa42c7-7480-4912-95ad-d4b43def63da',
    Price: 31.9,
  },
  {
    Name: 'Baião de dois',
    Description: 'Arroz, carne seca, linguiça, toucinho e pimenta de cheiro',
    RestaurantId: '17fa42c7-7480-4912-95ad-d4b43def63da',
    Price: 27.9,
  },
  {
    Name: 'Carne de sol',
    Description: 'Carne de sol, queijo coalho e macaxeira',
    RestaurantId: '17fa42c7-7480-4912-95ad-d4b43def63da',
    Price: 23.9,
  },
  {
    Name: 'Lasanha de carne seca',
    Description: 'Lasanha de carne seca com salada tropical',
    RestaurantId: '17fa42c7-7480-4912-95ad-d4b43def63da',
    Price: 25.9,
  },
  //Francesa
  {
    Name: 'Steak tartare',
    Description: 'Steak tartare com batata frita',
    RestaurantId: '6c219188-f363-4392-8da0-88b188848be7',
    Price: 41.9,
  },
  {
    Name: 'Filé Mignon',
    Description: 'Filé mignon com arroz',
    RestaurantId: '6c219188-f363-4392-8da0-88b188848be7',
    Price: 52.9,
  },
  {
    Name: 'Ravioli de Abóbora',
    Description: 'Abóbora, manteiga, cebola e chutney de maçã verde',
    RestaurantId: '6c219188-f363-4392-8da0-88b188848be7',
    Price: 39.9,
  },
  {
    Name: 'Especial da casa',
    Description: 'Filé Mignon, queijo brie, arroz a salada com folhas',
    RestaurantId: '6c219188-f363-4392-8da0-88b188848be7',
    Price: 74.9,
  },
  //Japonesa
  {
    Name: 'Temaki Shimeji',
    Description: 'Shimeji, cream cheese e cebolinha verde',
    RestaurantId: '0c8509a0-03ef-4c8b-8192-bd6b870ce3c7',
    Price: 22.9,
  },
  {
    Name: 'Harumaki de camarão',
    Description: 'Recheado com cream cheese e alho poró',
    RestaurantId: '0c8509a0-03ef-4c8b-8192-bd6b870ce3c7',
    Price: 26.9,
  },
  {
    Name: 'Yakimeshi misto',
    Description:
      'Frango, carne bovina, arroz oriental, cenoura, ovo, cebolinha e shoyo',
    RestaurantId: '0c8509a0-03ef-4c8b-8192-bd6b870ce3c7',
    Price: 22.9,
  },
  {
    Name: 'Hot Philadelphia',
    Description: 'Arroz Japonês com salmão e cream cheese, empanado e frito',
    RestaurantId: '0c8509a0-03ef-4c8b-8192-bd6b870ce3c7',
    Price: 26.9,
  },
  //Mexicana
  {
    Name: 'Taco de chilli',
    Description: 'Chilli de carne',
    RestaurantId: '0a44e41a-12c1-4416-9538-6fe9df0a6cc1',
    Price: 27.9,
  },
  {
    Name: 'Burrito de carne',
    Description: 'Carne, tomate e pimenta',
    RestaurantId: '0a44e41a-12c1-4416-9538-6fe9df0a6cc1',
    Price: 25.9,
  },
  {
    Name: 'Quesadilla de bacon',
    Description: 'Mussarela, bacon, pimenta chipotle',
    RestaurantId: '0a44e41a-12c1-4416-9538-6fe9df0a6cc1',
    Price: 21.9,
  },
  //Lanches, pizzas e porções

  {
    Name: 'Isca de tilápia',
    Description: 'Porção de peixe frito com molho tártaro',
    RestaurantId: '634ac116-619d-4692-ae3d-d479661e9bd1',
    Price: 40.0,
  },
  {
    Name: 'Pizza da casa',
    Description: 'Presunto, mussarela, ovo, frango, catupiry e tomate',
    RestaurantId: '634ac116-619d-4692-ae3d-d479661e9bd1',
    Price: 64.9,
  },
  {
    Name: 'X-tudo',
    Description: 'Hambúrguer, bacon, ovo, salsicha, alface e tomate',
    RestaurantId: '634ac116-619d-4692-ae3d-d479661e9bd1',
    Price: 10.0,
  },
  {
    Name: 'Isca de camarão',
    Description: 'Camarão assado com molho barbecue',
    RestaurantId: '634ac116-619d-4692-ae3d-d479661e9bd1',
    Price: 36.0,
  },
];
export async function up(knex: Knex): Promise<void> {
  await knex.insert(DataRestaurants).table(TABLE_NAME);
}

export async function down() {}
