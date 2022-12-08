import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";

export interface DeleteVehicleAdBoundary {
  execute: (id: GetByIdRequest) => Promise<void>;
}
