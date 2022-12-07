import { HttpService } from './http.service'

const basePath = '/email'

export const emailService = {
  sendEmail,
}

async function sendEmail(data: unknown) {
  return HttpService.post(`${basePath}`, data)
}
