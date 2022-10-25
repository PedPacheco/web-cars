import { ListAllUsersController } from "../controllers/ListAllUsersControlller";
import { ListAllUsersGateway } from "../gateway/ListAllUsersGateway";
import { ListAllUsersUseCase } from "../useCases/ListAllUsersUseCase";

export function ListAllUsersModule(): ListAllUsersController {
  const gateway = new ListAllUsersGateway();
  const useCase = new ListAllUsersUseCase(gateway);

  return new ListAllUsersController(useCase);
}
