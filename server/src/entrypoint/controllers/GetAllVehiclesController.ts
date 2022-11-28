import { GetAllVehiclesUseCase } from "../../core/useCases/GetAllVehiclesUseCase";

export class GetAllVehiclesController {
  public constructor(private readonly useCase: GetAllVehiclesUseCase) {
    this.useCase = useCase;
  }

  async handle(reqParams: any, reqQuery: any, reqBody: any) {
    return await this.useCase.execute();
  }
}
