import { CreateUserBoundary } from "../boundary/CreateUserBoundary";
import { IUserRequest } from "../requests/UserRequest";

export class CreateUserUseCase {
  public constructor(private readonly boundary: CreateUserBoundary) {
    this.boundary = boundary;
  }
  execute({ id, cep, email, name, password, phone }: IUserRequest) {
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
