import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";

export class UpdateUserController {
  public constructor(private readonly useCase: UpdateUserUseCase) {
    this.useCase = useCase;
  }

  handle(reqParams: any, reqQuery: any, reqBody: any) {
    const { id } = reqParams;
    const { name, email, phone, cep } = reqBody;
    console.log(reqBody);

    return this.useCase.execute({ id, name, email, phone, cep });
  }
}
