import IPlateRepository from '../../../repositories/interfaces/IPlateRepository';
import Plate from '../entities/Plate';

class GetPlates {
  constructor(private plateRepository: IPlateRepository) {}
  async execute(restaurant_id: string): Promise<Plate[]> {
    return this.plateRepository.getByRestaurantId(restaurant_id);
  }
}

export default GetPlates;
