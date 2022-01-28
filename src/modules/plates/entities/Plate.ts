import { uuid as uuidv4 } from 'uuidv4';
import Restaurant from '../../restaurants/entities/Restaurant';

class Plate {
  Id: string;
  Name: string;
  Description: string;
  Restaurant: Restaurant;

  constructor(name: string, description: string, restaurant: Restaurant) {
    this.Id = uuidv4();
    this.Name = name;
    this.Description = description;
    this.Restaurant = restaurant;
  }
}

export default Plate;
