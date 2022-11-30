import { GetUserByIdRequest } from "../../entrypoint/requests/GetUserByIdRequest";
import { GetUserVehiclesBoundary } from "../boundary/GetUserVehiclesBoundary";

export class GetUserVehiclesUseCase {
  public constructor(private readonly boundary: GetUserVehiclesBoundary) {
    this.boundary = boundary;
  }
  execute({ id }: GetUserByIdRequest) {
    const response = this.boundary.execute({
      id,
    });
    return response;
  }
}
