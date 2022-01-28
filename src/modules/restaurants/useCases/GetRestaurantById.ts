import IRestaurantRepository from '../../../repositories/RestaurantRepository';

class GetRestaurantById {
  constructor(private restaurantRepository: IRestaurantRepository) {}
  async execute(restaurant_id: string) {
    return this.restaurantRepository.getById(restaurant_id);
  }
}

export default GetRestaurantById;
