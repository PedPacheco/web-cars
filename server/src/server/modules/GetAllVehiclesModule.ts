import { GetAllVehiclesUseCase } from "../../core/useCases/GetAllVehiclesUseCase";
import { GetAllVehiclesGateway } from "../../dataprovider/gateway/GetAllVehiclesGateway";
import { GetAllVehiclesController } from "../../entrypoint/controllers/GetAllVehiclesController";

export function GetAllVehiclesModule(): GetAllVehiclesController {
  const gateway = new GetAllVehiclesGateway();
  const useCase = new GetAllVehiclesUseCase(gateway);

  return new GetAllVehiclesController(useCase);
}
