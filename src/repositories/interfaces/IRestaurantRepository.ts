import Restaurant from '../../modules/restaurants/entities/Restaurant';

export type ResultGetRestaurantsByPartName = {
  Id: string;
  Name: string;
  Culinary: string;
};
export default interface IRestaurantRepository {
  listenAll(): Promise<Restaurant[]>;
  getRestaurantsByPartName(
    partName: string,
  ): Promise<ResultGetRestaurantsByPartName[]>;

  getById(restaurant_id: string): Promise<Restaurant>;
}
