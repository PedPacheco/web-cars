import { GetVehicleByIdBoundary } from "../../core/boundary/GetVehicleByIdBoundary";
import { GetVehicleByIdRequest } from "./../../entrypoint/requests/GetVehiclesByIdRequest";
import { prisma } from "./../client/prisma";

export class GetVehicleByIdGateway implements GetVehicleByIdBoundary {
  public async execute({ userId, id }: GetVehicleByIdRequest) {
    const vehicle = await prisma.users.findUnique({
      where: {
        id: userId,
      },
      include: {
        vehicles: {
          where: {
            id: id,
          },
        },
      },
    });

    return vehicle;
  }
}
