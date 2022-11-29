import { HttpService } from './http.service'

const basePath = '/users'

export const AuthService = {
  getUserById,
  register,
  getAll,
}

async function register(data: any) {
  return HttpService.post(`${basePath}`, data)
}

async function getAll() {
  return HttpService.get(`${basePath}`)
}

async function getUserById(id: any) {
  return HttpService.get(`${basePath}/${id}`)
}
