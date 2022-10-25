import { PrismaClient } from "@prisma/client";
import { ListAllUsersBoundary } from "../boundary/ListAllUsersBoundary";

const prisma = new PrismaClient();

export class ListAllUsersGateway implements ListAllUsersBoundary {
  public async execute() {
    const user = await prisma.users.findMany();

    return user;
  }
}
