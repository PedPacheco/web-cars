import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { GetVehicleByIdBoundary } from "../boundary/GetVehicleByIdBoundary";

export class GetVehicleByIdUseCase {
  public constructor(private readonly boundary: GetVehicleByIdBoundary) {
    this.boundary = boundary;
  }
  execute({ id }: GetByIdRequest) {
    const response = this.boundary.execute({
      id,
    });
    return response;
  }
}
