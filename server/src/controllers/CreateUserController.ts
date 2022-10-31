import { CreateUserRequest } from "../requests/CreateUserRequest";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export class CreateUserController {
  public constructor(private readonly useCase: CreateUserUseCase) {
    this.useCase = useCase;
  }

  handle(reqParams: any, reqQuery: any, reqBody: CreateUserRequest) {
    const { name, email, phone, cep, password, id } = reqBody;

    return this.useCase.execute({
      id,
      name,
      cep,
      email,
      password,
      phone,
    });
  }
}
