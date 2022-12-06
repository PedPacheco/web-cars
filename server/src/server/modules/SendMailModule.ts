import { SendMailUseCase } from "../../core/useCases/SendMailUseCase";
import { SendMailGateway } from "../../dataprovider/gateway/SendMailGateway";
import { SendMailController } from "../../entrypoint/controllers/SendMailController";

export function SendMailModule(): SendMailController {
  const gateway = new SendMailGateway();
  const useCase = new SendMailUseCase(gateway);

  return new SendMailController(useCase);
}
