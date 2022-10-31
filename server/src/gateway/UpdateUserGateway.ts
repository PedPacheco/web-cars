import { prisma } from "../prisma";
import { UpdateUserRequest } from "../requests/UpdateUserRequest";

export class UpdateUserGateway {
  public async execute({ id, name, email, phone, cep }: UpdateUserRequest) {
    const user = await prisma.users.updateMany({
      where: {
        id,
      },
      data: {
        cep,
        email,
        name,
        phone,
      },
    });

    return user;
  }
}
