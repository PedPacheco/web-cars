import { GetAllUsersUseCase } from "../useCases/GetAllUsersUseCase";

export class GetAllUsersController {
  public constructor(private readonly useCase: GetAllUsersUseCase) {
    this.useCase = useCase;
  }

  async handle(reqParams: any, reqQuery: any, reqBody: any) {
    return await this.useCase.execute();
  }
}
