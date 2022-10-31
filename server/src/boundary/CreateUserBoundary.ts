import { CreateUserRequest } from "./../requests/CreateUserRequest";

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
