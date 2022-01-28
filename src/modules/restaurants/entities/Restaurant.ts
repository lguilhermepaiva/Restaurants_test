import { uuid as uuidv4 } from 'uuidv4';

class Restaurant {
  Id: string;
  Name: string;
  Culinary: string;
  StreetAddress: string;
  NumberAddress: number;
  District: string;
  Phone: string;

  constructor(
    name: string,
    culinary: string,
    streetAddress: string,
    numberAddress: number,
    district: string,
    phone: string,
  ) {
    this.Id = uuidv4();
    this.Name = name;
    this.Culinary = culinary;
    this.StreetAddress = streetAddress;
    this.NumberAddress = numberAddress;
    this.District = district;
    this.Phone = phone;
  }
}

export default Restaurant;
