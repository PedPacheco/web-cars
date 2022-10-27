import { GetUserByIdRequest } from "../requests/GetUserByIdRequest";

export interface GetUserByIdBoundary {
  execute: (id: GetUserByIdRequest) => Promise<any>;
}
