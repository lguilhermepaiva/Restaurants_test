import Plate from '../../modules/plates/entities/Plate';

export default interface IPlateRepository {
  getByRestaurantId(restaurant_id: string): Promise<Plate[]>;
}
