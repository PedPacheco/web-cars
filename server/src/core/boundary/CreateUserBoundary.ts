import { CreateUserRequest } from "../../entrypoint/requests/CreateUserRequest";

export interface CreateUserBoundary {
  execute: ({
    cep,
    email,
    name,
    password,
    phone,
    id,
  }: CreateUserRequest) => Promise<any>;
}
