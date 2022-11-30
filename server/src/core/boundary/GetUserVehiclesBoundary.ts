import { Vehicles } from "@prisma/client";
import { GetUserByIdRequest } from "../../entrypoint/requests/GetUserByIdRequest";

export interface GetUserVehiclesBoundary {
  execute: (id: GetUserByIdRequest) => Promise<Vehicles[]>;
}
