import nodemailer from "nodemailer";
import {
  SendMailBoundary,
  SendMailData,
} from "../../core/boundary/SendMailBoundary";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
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
