import IRestaurantRepository from '../../../repositories/RestaurantRepository';

class SearchRestaurants {
  constructor(private restaurantRepository: IRestaurantRepository) {}
  async execute(part_name: string) {
    return this.restaurantRepository.getRestaurantsByPartName(part_name);
  }
}

export default SearchRestaurants;
