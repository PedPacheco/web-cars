import { VehicleData } from '~/pages/vender-carro/fotos'
import { Button } from '../Atoms/Button'

interface VehicleAdvertisementProps {
  vehicle: VehicleData
  index: number
}

export function VehicleAdvertisement({
  index,
  vehicle,
}: VehicleAdvertisementProps) {
  return (
    <div
      className="w-[calc(100%-34px)] mx-auto mt-5 pb-6 lg:pb-0"
      key={vehicle.id}
    >
      <div className="flex flex-col mb-5 lg:flex-row">
        <div className="w-full flex flex-col items-center justify-center lg:w-[342px]">
          <picture className="w-full relative">
            <div className="w-full h-full absolute bg-gradient-to-l from-zinc-900"></div>
            <img
              src={vehicle.photos[index]?.url}
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
                17/05/2022
              </p>
              <p className="text-zinc-100 font-semibold lg:mr-4 lg:text-xl">
                R$ {vehicle.price}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end h-full mt-5 lg:mt-0">
            <Button lgwidth="lg:max-w-[160px]">Excluir</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
