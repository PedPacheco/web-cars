import { IUserRequest } from "../requests/UserRequest";

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
