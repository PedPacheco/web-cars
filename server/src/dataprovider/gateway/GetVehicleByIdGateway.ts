import { GetVehicleByIdBoundary } from "../../core/boundary/GetVehicleByIdBoundary";
import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { prisma } from "./../client/prisma";

export class GetVehicleByIdGateway implements GetVehicleByIdBoundary {
  public async execute({ id }: GetByIdRequest) {
    const vehicle = await prisma.vehicles.findUnique({
      where: {
        id: id,
      },
    });

    if (!vehicle) {
      throw new Error("Veiculo não existe");
    }

    return vehicle;
  }
}
