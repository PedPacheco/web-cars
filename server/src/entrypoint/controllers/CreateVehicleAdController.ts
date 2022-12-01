import { CreateVehicleAdUseCase } from "../../core/useCases/CreateVehicleAdUseCase";
import { CreateVehicleAdRequest } from "../requests/CreateVehicleAdRequest";

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

    console.log(description);

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
