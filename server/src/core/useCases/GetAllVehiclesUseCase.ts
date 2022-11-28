import { GetAllVehiclesBoundary } from "../boundary/GetAllVehiclesBoundary";

export class GetAllVehiclesUseCase {
  public constructor(private readonly boundary: GetAllVehiclesBoundary) {
    this.boundary = boundary;
  }

  async execute() {
    const response = await this.boundary.execute();

    return response;
  }
}
