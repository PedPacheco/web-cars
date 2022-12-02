import { GetUserByIdBoundary } from "../../core/boundary/GetUserByIdBoundary";
import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { prisma } from "./../client/prisma";

export class GetUserByIdGateway implements GetUserByIdBoundary {
  public async execute({ id }: GetByIdRequest) {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error("Usuario não existe");
    }

    return user;
  }
}
