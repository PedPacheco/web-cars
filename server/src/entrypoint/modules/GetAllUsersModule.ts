import { GetAllUsersUseCase } from "../../core/useCases/GetAllUsersUseCase";
import { GetAllUsersGateway } from "../../dataprovider/gateway/GetAllUsersGateway";
import { GetAllUsersController } from "../controllers/GetAllUsersControlller";

export function GetAllUsersModule(): GetAllUsersController {
  const gateway = new GetAllUsersGateway();
  const useCase = new GetAllUsersUseCase(gateway);

  return new GetAllUsersController(useCase);
}
