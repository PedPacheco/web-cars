import { CreateUserRequest } from "../../entrypoint/requests/CreateUserRequest";
import { CreateUserBoundary } from "../boundary/CreateUserBoundary";

export class CreateUserUseCase {
  public constructor(private readonly boundary: CreateUserBoundary) {
    this.boundary = boundary;
  }
  execute({ id, cep, email, name, password, phone }: CreateUserRequest) {
    const response = this.boundary.execute({
      id,
      cep,
      email,
      name,
      password,
      phone,
    });

    return response;
  }
}
