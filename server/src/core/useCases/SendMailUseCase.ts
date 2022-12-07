import { SendMailRequest } from "../../entrypoint/requests/SendMailRequest";
import { SendMailBoundary } from "../boundary/SendMailBoundary";

export class SendMailUseCase {
  public constructor(private readonly boundary: SendMailBoundary) {
    this.boundary = boundary;
  }
  execute({
    fromEmailUser,
    toEmailUser,
    message,
    fromName,
    toName,
    phone,
  }: SendMailRequest) {
    if (fromEmailUser === toEmailUser) {
      throw new Error("Você não pode enviar mensagem para esse usuário");
    }

    const response = this.boundary.sendMail({
      subject: "Alguém está interessado no seu veículo",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 80%; margin-left: auto; margin-right: auto;">`,
        `<p>Meu telefone para contato: ${phone}</p>`,
        `<p style="text-align: center">${message}</p>`,
        `</div>`,
      ].join("\n"),
      fromEmailUser,
      toEmailUser,
      fromName,
      toName,
    });

    return response;
  }
}
