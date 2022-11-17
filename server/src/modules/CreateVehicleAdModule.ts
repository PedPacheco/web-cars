import { CreateVehicleAdController } from "../controllers/CreateVehicleAdController";
import { CreateVehicleAdGateway } from "../gateway/CreateVehicleAdGateway";
import { CreateVehicleAdUseCase } from "../useCases/CreateVehicleAdUseCase";

export function CreateVehicleAdModule(): CreateVehicleAdController {
  const gateway = new CreateVehicleAdGateway();
  const useCase = new CreateVehicleAdUseCase(gateway);

  return new CreateVehicleAdController(useCase);
}
