import { Vehicles } from "@prisma/client";

export interface GetAllVehiclesBoundary {
  execute: () => Promise<Vehicles[]>;
}
