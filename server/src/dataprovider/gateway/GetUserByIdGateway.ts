import { GetUserByIdBoundary } from "../../core/boundary/GetUserByIdBoundary";
import { GetUserByIdRequest } from "../../entrypoint/requests/GetUserByIdRequest";
import { prisma } from "./../client/prisma";

export class GetUserByIdGateway implements GetUserByIdBoundary {
  public async execute({ id }: GetUserByIdRequest) {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
      include: {
        vehicles: true,
      },
    });

    if (!user) {
      throw new Error("Usuario não existe");
    }

    return user;
  }
}
