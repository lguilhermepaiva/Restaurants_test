import { Request, Response } from 'express';
import RestaurantRepository from '../../repositories/RestaurantRepository';
import Database from '../../database';
import GetRestaurantById from '../../modules/restaurants/useCases/GetRestaurantById';

class GetRestaurantByIdController {
  private getRestaurantById: GetRestaurantById;
  constructor() {
    this.getRestaurantById = new GetRestaurantById(
      new RestaurantRepository(Database.knexHelper),
    );
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { restaurant_id } = request.params;
    const restaurant = await this.getRestaurantById.execute(restaurant_id);
    return response.status(200).send(restaurant);
  }
}

export default GetRestaurantByIdController;
