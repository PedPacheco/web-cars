import { GetVehicleByIdUseCase } from "../../core/useCases/GetVehicleByIdUseCase";

export class GetVehicleByIdController {
  public constructor(private readonly useCase: GetVehicleByIdUseCase) {
    this.useCase = useCase;
  }

  async handle(reqParams: any, reqQuery: any, reqBody: any) {
    const { id, userId } = reqParams;

    return await this.useCase.execute({ userId, id });
  }
}
