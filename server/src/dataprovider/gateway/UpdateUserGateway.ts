import { UpdateUserBoundary } from "../../core/boundary/UpdateUserUseCase";
import { UpdateUserRequest } from "../../entrypoint/requests/UpdateUserRequest";
import { prisma } from "./../client/prisma";

export class UpdateUserGateway implements UpdateUserBoundary {
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
