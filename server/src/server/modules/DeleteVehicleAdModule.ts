import { DeleteVehicleAdUseCase } from "../../core/useCases/DeleteVehicleAdUseCase";
import { DeleteVehicleAdGateway } from "../../dataprovider/gateway/DeleteVehicleAdGateway";
import { DeleteVehicleAdController } from "../../entrypoint/controllers/DeleteVehicleAdController";

export function DeleteVehicleAdModule(): DeleteVehicleAdController {
  const gateway = new DeleteVehicleAdGateway();
  const useCase = new DeleteVehicleAdUseCase(gateway);

  return new DeleteVehicleAdController(useCase);
}
