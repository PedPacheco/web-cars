import { GetUserVehiclesUseCase } from "../../core/useCases/GetUserVehiclesUseCase";
import { GetUserVehiclesGateway } from "../../dataprovider/gateway/GetUserVehiclesGateway";
import { GetUserVehiclesController } from "../../entrypoint/controllers/GetUserVehiclesController";

export function GetUserVehiclesModule(): GetUserVehiclesController {
  const gateway = new GetUserVehiclesGateway();
  const useCase = new GetUserVehiclesUseCase(gateway);

  return new GetUserVehiclesController(useCase);
}
