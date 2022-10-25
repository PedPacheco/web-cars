import { ListAllUsersUseCase } from "../useCases/ListAllUsersUseCase";

export class ListAllUsersController {
  public constructor(private readonly useCase: ListAllUsersUseCase) {
    this.useCase = useCase;
  }

  async handle(reqParams: any, reqQuery: any, reqBody: any) {
    const users = await this.useCase.execute();
    const statusAndUsers = {
      status: 200,
      users,
    };
    return statusAndUsers;
  }
}
