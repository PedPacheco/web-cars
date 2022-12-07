export interface SendMailBoundary {
  sendMail: (data: SendMailData) => Promise<void>;
}

export interface SendMailData {
  subject: string;
  body: string;
  fromEmailUser: string;
  toEmailUser: string;
  fromName: string;
  toName: string;
}
