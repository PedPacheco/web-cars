import { GetUserByIdUseCase } from "../../core/useCases/GetUserByIdUseCase";

export class GetUserByIdController {
  public constructor(private readonly useCase: GetUserByIdUseCase) {
    this.useCase = useCase;
  }

  async handle(reqParams: any, reqQuery: any, reqBody: any) {
    const { id } = reqParams;

    return await this.useCase.execute({ id });
  }
}
