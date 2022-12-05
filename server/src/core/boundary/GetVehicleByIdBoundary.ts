import { Vehicles } from "@prisma/client";
import { User } from "../models/User";
import { GetVehicleByIdRequest } from "./../../entrypoint/requests/GetVehiclesByIdRequest";

export interface GetVehicleByIdBoundary {
  execute: (
    id: GetVehicleByIdRequest
  ) => Promise<(User & { vehicles: Vehicles[] }) | null>;
}
