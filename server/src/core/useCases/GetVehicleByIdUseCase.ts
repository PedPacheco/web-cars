import { GetVehicleByIdBoundary } from "../boundary/GetVehicleByIdBoundary";
import { GetVehicleByIdRequest } from "./../../entrypoint/requests/GetVehiclesByIdRequest";

export class GetVehicleByIdUseCase {
  public constructor(private readonly boundary: GetVehicleByIdBoundary) {
    this.boundary = boundary;
  }
  execute({ userId, id }: GetVehicleByIdRequest) {
    const response = this.boundary.execute({
      userId,
      id,
    });

    return response;
  }
}
