import { GetUserByIdBoundary } from "../../core/boundary/GetUserByIdBoundary";
import { GetUserByIdRequest } from "../../entrypoint/requests/GetUserByIdRequest";
import { prisma } from "./../client/prisma";

export class GetUserByIdGateway implements GetUserByIdBoundary {
  public async execute({ id }: GetUserByIdRequest) {
    const user = prisma.users.findUnique({
      where: {
        id: id,
      },
      include: {
        vehicles: true,
      },
    });

    return user;
  }
}
