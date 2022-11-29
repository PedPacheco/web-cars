import axios from 'axios'
import { ToastService } from './toast.service' // importo meu serviço de toast

// crio/conecto com minha API e passo o tradicional baseURL que é o endereço da API e no header os configs
const HttpService = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

// esse é o interceptor responsável por pegar a resposta da API e verificar em qual toast ela se enquadra e em caso de sucesso já tetorna o response.data
HttpService.interceptors.response.use((response: any) => {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  ;(response.data.messages || []).forEach(
    (resultMessage: { message: string; type: any }) => {
      if (resultMessage.message) {
        resultMessage.message = resultMessage.message.replaceAll('P0001: ', '')
        // const t = i18n.t;
        switch (resultMessage.type) {
          case 0:
          case 'ERROR':
            ToastService.error(resultMessage.message)
            break
          case 1:
          case 'WARNING':
            ToastService.warn(resultMessage.message)
            break
          case 2:
          case 'INFO':
            ToastService.info(resultMessage.message)
            break
          case 3:
          case 'SUCCESS':
            ToastService.success(resultMessage.message)
            break
          default:
            ToastService.info(resultMessage.message)
            break
        }
      }
    },
  )
  if (response.data.redirectRoute) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTimeout(() => {}, 3000)
  }
  return response
})
export { HttpService }
