import Plate from '../modules/plates/entities/Plate';
import IKnexHelper from '../database/interfaces/IKnexHelper';
import IPlateRepository from './interfaces/IPlateRepository';

class PlateRepository implements IPlateRepository {
  constructor(private em: IKnexHelper) {}
  private readonly TABLE_NAME = 'Plates';

  async getByRestaurantId(restaurant_id: string): Promise<Plate[]> {
    const a = await this.em
      .query(this.TABLE_NAME)
      .select('*')
      .where({ RestaurantId: restaurant_id });
    return a;
  }
}

export default PlateRepository;
