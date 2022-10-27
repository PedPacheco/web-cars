import { IUserRequest } from "../requests/CreateUserRequest";

export interface CreateUserBoundary {
  execute: ({
    cep,
    email,
    name,
    password,
    phone,
    id,
  }: IUserRequest) => Promise<any>;
}
