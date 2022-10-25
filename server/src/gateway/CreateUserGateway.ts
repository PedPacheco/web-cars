import { CreateUserBoundary } from "../boundary/CreateUserBoundary";
import { prisma } from "../prisma";
import { IUserRequest } from "../requests/UserRequest";

export class CreateUserGateway implements CreateUserBoundary {
  public async execute({
    cep,
    email,
    name,
    password,
    phone,
    id,
  }: IUserRequest) {
    const user = await prisma.users.create({
      data: {
        id,
        name,
        cep,
        email,
        password,
        phone,
      },
    });

    return user;
  }
}
