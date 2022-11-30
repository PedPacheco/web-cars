import { GetUserVehiclesUseCase } from "../../core/useCases/GetUserVehiclesUseCase";

export class GetUserVehiclesController {
  public constructor(private readonly useCase: GetUserVehiclesUseCase) {
    this.useCase = useCase;
  }

  async handle(reqParams: any, reqQuery: any, reqBody: any) {
    const { id } = reqParams;

    return await this.useCase.execute({ id });
  }
}
