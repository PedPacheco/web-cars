export interface CreateVehicleAdRequest {
  userId: string;
  brand: string;
  model: string;
  modelYear: number;
  version: string;
  yearOfManufacture: number;
  color: string;
  kmTraveled: number;
  description: string;
  price: number;
  photos: Array<object>;
}
