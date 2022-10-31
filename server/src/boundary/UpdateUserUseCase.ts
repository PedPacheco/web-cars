import { UpdateUserRequest } from "../requests/UpdateUserRequest";

export interface UpdateUserBoundary {
  execute: ({ id, name, email, cep, phone }: UpdateUserRequest) => Promise<any>;
}
