import { CreateVehicleAdBoundary } from "../boundary/CreateVehicleAdBoundary";
import { CreateVehicleAdRequest } from "../requests/CreateVehicleAdRequest";

export class CreateVehicleAdUseCase {
  public constructor(private readonly boundary: CreateVehicleAdBoundary) {
    this.boundary = boundary;
  }
  execute({
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
  }: CreateVehicleAdRequest) {
    const response = this.boundary.execute({
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
    });

    return response;
  }
}
