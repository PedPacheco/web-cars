import { UpdateUserController } from "../controllers/UpdateUserController";
import { UpdateUserGateway } from "../gateway/UpdateUserGateway";
import { UpdateUserUseCase } from "../useCases/UpdateUserUseCase";

export function UpdateUserModule(): UpdateUserController {
  const gateway = new UpdateUserGateway();
  const useCase = new UpdateUserUseCase(gateway);

  return new UpdateUserController(useCase);
}
