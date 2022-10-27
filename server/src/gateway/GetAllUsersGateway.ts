import { PrismaClient } from "@prisma/client";
import { GetAllUsersBoundary } from "../boundary/GetAllUsersBoundary";

const prisma = new PrismaClient();

export class GetAllUsersGateway implements GetAllUsersBoundary {
  public async execute() {
    const user = await prisma.users.findMany();

    return user;
  }
}
