import { GetByIdRequest } from "../../entrypoint/requests/GetByIdRequest";
import { User } from "../models/User";

export interface GetUserByIdBoundary {
  execute: (id: GetByIdRequest) => Promise<User>;
}
