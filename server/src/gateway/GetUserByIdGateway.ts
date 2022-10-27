import { GetUserByIdBoundary } from "../boundary/GetUserByIdBoundary";
import { prisma } from "../prisma";
import { GetUserByIdRequest } from "../requests/GetUserByIdRequest";

export class GetUserByIdGateway implements GetUserByIdBoundary {
  public async execute({ id }: GetUserByIdRequest) {
    const user = prisma.users.findUnique({ where: { id: id } });

    return user;
  }
}
