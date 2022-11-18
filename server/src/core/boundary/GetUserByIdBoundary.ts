import { GetUserByIdRequest } from "../../entrypoint/requests/GetUserByIdRequest";

export interface GetUserByIdBoundary {
  execute: (id: GetUserByIdRequest) => Promise<any>;
}
