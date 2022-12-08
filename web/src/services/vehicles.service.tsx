import { HttpService } from './http.service'

const basePath = '/vehicles'

export const VehiclesService = {
  getUserVehiclesById,
  getVehicleById,
  register,
  getAll,
  deleteVehicle,
}

async function register(data: any) {
  return HttpService.post(`${basePath}`, data)
}

async function getAll() {
  return HttpService.get(`${basePath}`)
}

async function getUserVehiclesById(id: string) {
  return HttpService.get(`/users${basePath}/${id}`)
}

async function getVehicleById(
  userId: string | string[] | undefined,
  id: string | string[] | undefined,
) {
  return HttpService.get(`${basePath}/${userId}/${id}`)
}

async function deleteVehicle(id: string) {
  return HttpService.delete(`${basePath}/${id}`)
}
