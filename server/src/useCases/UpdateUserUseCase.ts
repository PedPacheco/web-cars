import { UpdateUserRequest } from "../requests/UpdateUserRequest";
import { UpdateUserBoundary } from "./../boundary/UpdateUserUseCase";

export class UpdateUserUseCase {
  public constructor(private readonly boundary: UpdateUserBoundary) {
    this.boundary = boundary;
  }

  execute({ id, name, email, phone, cep }: UpdateUserRequest) {
    const response = this.boundary.execute({ id, name, email, phone, cep });

    return response;
  }
}
