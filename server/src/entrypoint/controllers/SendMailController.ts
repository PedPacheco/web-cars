import { SendMailUseCase } from "../../core/useCases/SendMailUseCase";
import { SendMailRequest } from "./../requests/SendMailRequest";

export class SendMailController {
  public constructor(private readonly useCase: SendMailUseCase) {
    this.useCase = useCase;
  }

  async handle(reqParams: any, reqQuery: any, reqBody: SendMailRequest) {
    const { fromEmailUser, message, fromName, toName, phone, toEmailUser } =
      reqBody;

    return await this.useCase.execute({
      fromEmailUser,
      message,
      fromName,
      toName,
      phone,
      toEmailUser,
    });
  }
}
