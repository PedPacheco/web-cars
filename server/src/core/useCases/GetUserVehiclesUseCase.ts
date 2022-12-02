import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { GetUserVehiclesBoundary } from "../boundary/GetUserVehiclesBoundary";

export class GetUserVehiclesUseCase {
  public constructor(private readonly boundary: GetUserVehiclesBoundary) {
    this.boundary = boundary;
  }
  execute({ id }: GetByIdRequest) {
    const response = this.boundary.execute({
      id,
    });
    return response;
  }
}
