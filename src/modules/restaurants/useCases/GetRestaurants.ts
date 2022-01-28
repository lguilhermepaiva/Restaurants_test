import IRestaurantRepository from '../../../repositories/RestaurantRepository';

class GetRestaurants {
  constructor(private restaurantRepository: IRestaurantRepository) {}
  async execute() {
    return this.restaurantRepository.listenAll();
  }
}

export default GetRestaurants;
