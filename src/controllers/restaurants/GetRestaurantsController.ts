import { Request, Response } from 'express';
import GetRestaurants from '../../modules/restaurants/useCases/GetRestaurants';
import RestaurantRepository from '../../repositories/RestaurantRepository';
import Database from '../../database';

class GetRestaurantsController {
  private getRestaurants: GetRestaurants;
  constructor() {
    this.getRestaurants = new GetRestaurants(
      new RestaurantRepository(Database.knexHelper),
    );
  }
  async handle(_: Request, response: Response): Promise<Response> {
    const restaurants = await this.getRestaurants.execute();
    return response.status(200).send(restaurants);
  }
}

export default GetRestaurantsController;
