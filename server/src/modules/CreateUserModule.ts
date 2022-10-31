import { CreateUserController } from "../controllers/CreateUserController";
import { CreateUserGateway } from "../gateway/CreateUserGateway";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

export function CreateUserModule(): CreateUserController {
  const gateway = new CreateUserGateway();
  const useCase = new CreateUserUseCase(gateway);

  return new CreateUserController(useCase);
}
