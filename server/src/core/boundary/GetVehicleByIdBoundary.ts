import { Vehicles } from "@prisma/client";
import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";

export interface GetVehicleByIdBoundary {
  execute: (id: GetByIdRequest) => Promise<Vehicles>;
}
