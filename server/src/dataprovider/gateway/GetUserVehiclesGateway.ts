import { GetUserVehiclesBoundary } from "../../core/boundary/GetUserVehiclesBoundary";
import { GetUserByIdRequest } from "../../entrypoint/requests/GetUserByIdRequest";
import { prisma } from "./../client/prisma";

export class GetUserVehiclesGateway implements GetUserVehiclesBoundary {
  public async execute({ id }: GetUserByIdRequest) {
    const vehicles = await prisma.vehicles.findMany({
      where: {
        userId: id,
      },
    });

    return vehicles;
  }
}
