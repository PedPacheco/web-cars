import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { DeleteVehicleAdBoundary } from "../boundary/DeleteVehicleAdBoundary";

export class DeleteVehicleAdUseCase {
  public constructor(private readonly boundary: DeleteVehicleAdBoundary) {
    this.boundary = boundary;
  }
  execute({ id }: GetByIdRequest) {
    const response = this.boundary.execute({
      id,
    });
    return response;
  }
}
