import Link from 'next/link'
import { Calendar, Gauge } from 'phosphor-react'
import { VehicleData } from '~/pages/vender-carro/fotos'

interface VehicleAdvertisementProps {
  vehicle: VehicleData
}

export function VehicleAdvertisement({ vehicle }: VehicleAdvertisementProps) {
  return (
    <Link href={`/veiculo/${vehicle.userId}/${vehicle.id}`}>
      <a className="w-[calc(100%-30px)] m-4 px-4 lg:m-0 lg:min-w-[500px] lg:w-[33%] ">
        <div className="flex flex-col justify-center rounded py-4 mb-4 mt-6 shadow bg-zinc-800 lg:mx-1 hover:shadow-2xl">
          <picture className="px-4">
            <img
              src={vehicle.photos[0]?.url}
              alt="Imagem do veiculo"
              className="w-full h-[calc((100vw/0.8)*0.5625)] mb-2 max-w-full object-cover lg:h-[calc((100vw/3)*0.5625)] hover:shadow-2xl"
            />
          </picture>

          <div className="w-full px-4 lg:max-w-full mt-2">
            <h3>
              <span className="font-semibold">
                {vehicle.brand.toUpperCase()}{' '}
              </span>
              {vehicle.model.toUpperCase()}
            </h3>
            <small>{vehicle.version}</small>
            <div className="w-full my-2 max-w-full flex flex-col">
              <span>Á vista</span>
              <span className="text-xl font-bold text-brand-primary">
                R$ {Number(vehicle.price).toFixed(2)}
              </span>
            </div>
            <div className="flex flex-start py-2 text-xs">
              <div className="w-full text-left">
                <span className="flex justify-start items-center">
                  <Calendar size={16} weight="bold" className="mr-2" />
                  {vehicle.yearOfManufacture}/{vehicle.modelYear}
                </span>
              </div>
              <div className="w-full text-right pr-4 ">
                <span className="flex justify-end items-center">
                  <Gauge size={16} weight="bold" className="mr-2" />
                  {vehicle.kmTraveled} Km
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
