import { CreateUserUseCase } from "../../core/useCases/CreateUserUseCase";
import { CreateUserGateway } from "../../dataprovider/gateway/CreateUserGateway";
import { CreateUserController } from "../../entrypoint/controllers/CreateUserController";

export function CreateUserModule(): CreateUserController {
  const gateway = new CreateUserGateway();
  const useCase = new CreateUserUseCase(gateway);

  return new CreateUserController(useCase);
}
