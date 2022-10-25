import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export class CreateUserController {
  public constructor(private readonly useCase: CreateUserUseCase) {
    this.useCase = useCase;
  }

  handle(reqParams: any, reqQuery: any, reqBody: any) {
    const { name, email, phone, cep, password, id } = reqBody;

    const user = this.useCase.execute({
      id,
      name,
      cep,
      email,
      password,
      phone,
    });

    const statusAndUser = {
      status: 200,
      user,
    };

    return statusAndUser;
  }
}
