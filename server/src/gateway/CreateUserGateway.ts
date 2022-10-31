import { CreateUserBoundary } from "../boundary/CreateUserBoundary";
import { CreateUserRequest } from "../requests/CreateUserRequest";
import { prisma } from "./../prisma";

export class CreateUserGateway implements CreateUserBoundary {
  public async execute({
    cep,
    email,
    name,
    password,
    phone,
    id,
  }: CreateUserRequest) {
    const user = await prisma.users.create({
      data: {
        id,
        name,
        cep: cep !== null ? cep : "",
        email,
        password: password !== null ? password : "",
        phone: phone !== null ? phone : "",
      },
    });

    return user;
  }
}
