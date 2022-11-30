import { HttpService } from './http.service'

const basePath = '/vehicles'

export const VehiclesService = {
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

async function getUserById(id: string) {
  return HttpService.get(`${basePath}/${id}`)
}
