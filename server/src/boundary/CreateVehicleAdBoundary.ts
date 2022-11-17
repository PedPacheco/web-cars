import { CreateVehicleAdRequest } from "./../requests/CreateVehicleAdRequest";

export interface CreateVehicleAdBoundary {
  execute: ({
    brand,
    color,
    description,
    kmTraveled,
    model,
    modelYear,
    photos,
    price,
    userId,
    version,
    yearOfManufacture,
  }: CreateVehicleAdRequest) => Promise<any>;
}
