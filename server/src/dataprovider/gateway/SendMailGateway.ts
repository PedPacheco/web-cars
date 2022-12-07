import nodemailer from "nodemailer";
import {
  SendMailBoundary,
  SendMailData,
} from "../../core/boundary/SendMailBoundary";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3d255ec76c5faa",
    pass: "27a556b867e87e",
  },
});

export class SendMailGateway implements SendMailBoundary {
  public async sendMail({
    body,
    subject,
    fromEmailUser,
    toEmailUser,
    fromName,
    toName,
  }: SendMailData) {
    await transport.sendMail({
      from: `${fromName} < ${fromEmailUser}>`,
      to: `${toName} < ${toEmailUser} >`,
      subject,
      html: body,
    });
  }
}
