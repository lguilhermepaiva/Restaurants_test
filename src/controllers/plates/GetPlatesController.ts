import { Request, Response } from 'express';
import Database from '../../database';
import GetPlates from '../../modules/plates/useCases/GetPlates';
import PlateRepository from '../../repositories/PlateRepository';

class GetPlatesController {
  private getPlates: GetPlates;
  constructor() {
    this.getPlates = new GetPlates(new PlateRepository(Database.knexHelper));
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { restaurant_id } = request.params;
    const restaurants = await this.getPlates.execute(restaurant_id);
    return response.status(200).send(restaurants);
  }
}

export default GetPlatesController;
