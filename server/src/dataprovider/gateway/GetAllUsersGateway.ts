import { PrismaClient } from "@prisma/client";
import { GetAllUsersBoundary } from "../../core/boundary/GetAllUsersBoundary";

const prisma = new PrismaClient();

export class GetAllUsersGateway implements GetAllUsersBoundary {
  public async execute() {
    const user = await prisma.users.findMany();

    return user;
  }
}
