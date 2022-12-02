import { GetUserVehiclesBoundary } from "../../core/boundary/GetUserVehiclesBoundary";
import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { prisma } from "./../client/prisma";

export class GetUserVehiclesGateway implements GetUserVehiclesBoundary {
  public async execute({ id }: GetByIdRequest) {
    const vehicles = await prisma.vehicles.findMany({
      where: {
        userId: id,
      },
    });

    return vehicles;
  }
}
