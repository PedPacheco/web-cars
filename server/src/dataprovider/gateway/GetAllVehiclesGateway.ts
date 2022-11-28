import { PrismaClient } from "@prisma/client";
import { GetAllUsersBoundary } from "../../core/boundary/GetAllUsersBoundary";

const prisma = new PrismaClient();

export class GetAllVehiclesGateway implements GetAllUsersBoundary {
  public async execute() {
    const vehicles = await prisma.vehicles.findMany();

    return vehicles;
  }
}
