import { CreateVehicleAdRequest } from "../requests/CreateVehicleAdRequest";
import { CreateVehicleAdUseCase } from "../useCases/CreateVehicleAdUseCase";

export class CreateVehicleAdController {
  public constructor(private readonly useCase: CreateVehicleAdUseCase) {
    this.useCase = useCase;
  }

  handle(reqParams: any, reqQuery: any, reqBody: CreateVehicleAdRequest) {
    const {
      userId,
      brand,
      model,
      version,
      modelYear,
      yearOfManufacture,
      color,
      kmTraveled,
      description,
      price,
      photos,
    } = reqBody;

    return this.useCase.execute({
      userId,
      brand,
      model,
      version,
      modelYear,
      yearOfManufacture,
      color,
      kmTraveled,
      description,
      price,
      photos,
    });
  }
}
