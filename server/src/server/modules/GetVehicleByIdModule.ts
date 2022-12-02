import { GetVehicleByIdUseCase } from "../../core/useCases/GetVehicleByIdUseCase";
import { GetVehicleByIdGateway } from "../../dataprovider/gateway/GetVehicleByIdGateway";
import { GetVehicleByIdController } from "../../entrypoint/controllers/GetVehicleByIdController";

export function GetVehicleByIdModule(): GetVehicleByIdController {
  const gateway = new GetVehicleByIdGateway();
  const useCase = new GetVehicleByIdUseCase(gateway);

  return new GetVehicleByIdController(useCase);
}
