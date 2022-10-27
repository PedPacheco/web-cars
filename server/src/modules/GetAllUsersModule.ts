import { GetAllUsersController } from "../controllers/GetAllUsersControlller";
import { GetAllUsersGateway } from "../gateway/GetAllUsersGateway";
import { GetAllUsersUseCase } from "../useCases/GetAllUsersUseCase";

export function GetAllUsersModule(): GetAllUsersController {
  const gateway = new GetAllUsersGateway();
  const useCase = new GetAllUsersUseCase(gateway);

  return new GetAllUsersController(useCase);
}
