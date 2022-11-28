import { GetUserByIdRequest } from "../../entrypoint/requests/GetUserByIdRequest";
import { User } from "../models/Vehicles";

export interface GetUserByIdBoundary {
  execute: (id: GetUserByIdRequest) => Promise<User>;
}
