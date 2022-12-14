import { Vehicles } from "@prisma/client";
import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";

export interface GetUserVehiclesBoundary {
  execute: (id: GetByIdRequest) => Promise<Vehicles[]>;
}
