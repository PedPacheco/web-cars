import { DeleteVehicleAdUseCase } from "../../core/useCases/DeleteVehicleAdUseCase";

export class DeleteVehicleAdController {
  public constructor(private readonly useCase: DeleteVehicleAdUseCase) {
    this.useCase = useCase;
  }

  async handle(reqParams: any, reqQuery: any, reqBody: any) {
    const { id } = reqParams;

    return await this.useCase.execute({ id });
  }
}
