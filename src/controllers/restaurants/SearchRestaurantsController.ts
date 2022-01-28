import { Request, Response } from 'express';
import RestaurantRepository from '../../repositories/RestaurantRepository';
import Database from '../../database';
import SearchRestaurants from '../../modules/restaurants/useCases/SearchRestaurants';

class SearchRestaurantsController {
  private searchRestaurants: SearchRestaurants;
  constructor() {
    this.searchRestaurants = new SearchRestaurants(
      new RestaurantRepository(Database.knexHelper),
    );
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { part_name } = request.params;
    const restaurants = await this.searchRestaurants.execute(part_name);
    return response.status(200).send(restaurants);
  }
}

export default SearchRestaurantsController;
