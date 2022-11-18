import { UpdateUserUseCase } from "../../core/useCases/UpdateUserUseCase";
import { UpdateUserGateway } from "../../dataprovider/gateway/UpdateUserGateway";
import { UpdateUserController } from "../controllers/UpdateUserController";

export function UpdateUserModule(): UpdateUserController {
  const gateway = new UpdateUserGateway();
  const useCase = new UpdateUserUseCase(gateway);

  return new UpdateUserController(useCase);
}
