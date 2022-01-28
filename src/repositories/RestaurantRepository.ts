import Restaurant from '../modules/restaurants/entities/Restaurant';
import IRestaurantRepository, {
  ResultGetRestaurantsByPartName,
} from './interfaces/IRestaurantRepository';
import IKnexHelper from '../database/interfaces/IKnexHelper';

class RestaurantRepository implements IRestaurantRepository {
  constructor(private em: IKnexHelper) {}
  private readonly TABLE_NAME = 'Restaurants';

  private readonly TABLE_NAME_2 = 'Plates';

  async listenAll(): Promise<Restaurant[]> {
    return this.em.query(this.TABLE_NAME).select('*');
  }

  async getById(restaurant_id: string): Promise<Restaurant> {
    const [restaurant] = await this.em
      .query(this.TABLE_NAME)
      .select('*')
      .where({ Id: restaurant_id });
    return restaurant;
  }
  async getRestaurantsByPartName(
    partName: string,
  ): Promise<ResultGetRestaurantsByPartName[]> {
    const query = [
      'SELECT DISTINCT',
      'r."Id" as "Id",',
      'r."Name" as "Name",',
      'r."Culinary" as "Culinary",',
      'r."UrlImage" as "UrlImage"',
      `FROM "${this.TABLE_NAME}" AS r`,
      `INNER JOIN "${this.TABLE_NAME_2}" AS p`,
      'ON (r."Id" = p."RestaurantId")',
      `WHERE LOWER(r."Name") LIKE LOWER('%${partName}%')`,
      `OR LOWER(r."Culinary") LIKE LOWER('%${partName}%')`,
      `OR LOWER(p."Name") LIKE LOWER('%${partName}%')`,
      `OR LOWER(p."Description") LIKE LOWER('%${partName}%')`,
    ].join('\n');

    const { rows } = await this.em.raw<ResultGetRestaurantsByPartName[]>(query);

    return rows;
  }
}

export default RestaurantRepository;
