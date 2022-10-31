import { CreateUserBoundary } from "../boundary/CreateUserBoundary";
import { CreateUserRequest } from "../requests/CreateUserRequest";

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
