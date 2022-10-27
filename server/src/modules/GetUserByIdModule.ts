import { GetUserByIdController } from "../controllers/GetUserByIdController";
import { GetUserByIdGateway } from "../gateway/GetUserByIdGateway";
import { GetUserByIdUseCase } from "../useCases/GetUserByIdUseCase";

export function GetUserByIdModule(): GetUserByIdController {
  const gateway = new GetUserByIdGateway();
  const useCase = new GetUserByIdUseCase(gateway);

  return new GetUserByIdController(useCase);
}
