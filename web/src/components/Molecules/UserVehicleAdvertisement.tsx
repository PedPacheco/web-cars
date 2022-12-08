import Router from 'next/router'
import { useEffect, useState } from 'react'
import { VehicleData } from '~/pages/vender-carro/fotos'
import { ToastService } from '~/services/toast.service'
import { VehiclesService } from '~/services/vehicles.service'
import { Button } from '../Atoms/Button'

interface UserVehicleAdvertisementProps {
  vehicle: VehicleData
}

export function UserVehicleAdvertisement({
  vehicle,
}: UserVehicleAdvertisementProps) {
  const [day, setDay] = useState<number>(0)
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)

  useEffect(() => {
    setMonth(new Date(vehicle.createdAt).getMonth() + 1)
    setDay(new Date(vehicle.createdAt).getDate() + 1)
    setYear(new Date(vehicle.createdAt).getFullYear())
  }, [vehicle.createdAt])

  async function deleteAd(id: string) {
    try {
      await VehiclesService.deleteVehicle(id)

      ToastService.success('Anúncio deletado com sucesso')
      Router.reload()
    } catch (error) {
      ToastService.error('Algo deu errado ao deletar esse anúncio')
    }
  }

  return (
    <div
      className="w-[calc(100%-34px)] mx-auto mt-5 pb-6 lg:pb-0"
      key={vehicle.id}
    >
      <div className="flex flex-col mb-5 lg:flex-row">
        <div className="w-full flex flex-col items-center justify-center lg:w-[368px]">
          <picture className="w-full relative">
            <img
              src={vehicle.photos[0]?.url}
              className="w-full h-60 rounded-t overflow-hidden object-cover"
              alt="Imagem principal do veiculo"
            />
          </picture>
        </div>
        <div className="w-full rounded-b p-4 flex flex-col h-auto bg-zinc-700 shadow-md lg:w-[calc(100%-391px)] rounded-r">
          <div className="flex justify-between items-start lg:items-center w-full">
            <div className="flex flex-col gap-2">
              <p className="max-w-[200px] font-semibold text-zinc-100 lg:text-xl">
                {vehicle.brand.toUpperCase()} {vehicle.model.toUpperCase()}
              </p>
              <p className="max-w-[180px] h-4 text-xs text-zinc-300 lg:max-w-[300px]">
                {vehicle.version.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="h-5 w-full font-medium text-xs text-zinc-400 text-right self-center">
                {day}/{month}/{year}
              </p>
              <p className="text-zinc-100 font-semibold lg:mr-4 lg:text-xl">
                R$ {vehicle.price}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end h-full mt-5 lg:mt-0">
            <Button
              onClick={() => deleteAd(vehicle.id)}
              lgwidth="lg:max-w-[160px]"
            >
              Excluir
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
