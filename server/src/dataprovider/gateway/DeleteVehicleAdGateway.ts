import { DeleteVehicleAdBoundary } from "../../core/boundary/DeleteVehicleAdBoundary";
import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { prisma } from "./../client/prisma";

export class DeleteVehicleAdGateway implements DeleteVehicleAdBoundary {
  public async execute({ id }: GetByIdRequest) {
    await prisma.vehicles.delete({
      where: {
        id: id,
      },
    });
  }
}
