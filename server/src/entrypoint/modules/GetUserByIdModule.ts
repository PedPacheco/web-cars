import { GetUserByIdUseCase } from "../../core/useCases/GetUserByIdUseCase";
import { GetUserByIdGateway } from "../../dataprovider/gateway/GetUserByIdGateway";
import { GetUserByIdController } from "../controllers/GetUserByIdController";

export function GetUserByIdModule(): GetUserByIdController {
  const gateway = new GetUserByIdGateway();
  const useCase = new GetUserByIdUseCase(gateway);

  return new GetUserByIdController(useCase);
}
