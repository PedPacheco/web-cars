import { CreateVehicleAdUseCase } from "../../core/useCases/CreateVehicleAdUseCase";
import { CreateVehicleAdGateway } from "../../dataprovider/gateway/CreateVehicleAdGateway";
import { CreateVehicleAdController } from "../../entrypoint/controllers/CreateVehicleAdController";

export function CreateVehicleAdModule(): CreateVehicleAdController {
  const gateway = new CreateVehicleAdGateway();
  const useCase = new CreateVehicleAdUseCase(gateway);

  return new CreateVehicleAdController(useCase);
}
