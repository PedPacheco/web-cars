import { useEffect, useState } from 'react'
import { Header } from '~/components/Molecules/Header'
import { VehicleAdvertisement } from '~/components/Molecules/VehicleAdvertisement'
import { VehiclesService } from '~/services/vehicles.service'
import { VehicleData } from './vender-carro/fotos'

export default function Home() {
  const [vehicles, setVehicles] = useState([] as VehicleData[])

  useEffect(() => {
    async function getVehicles() {
      const vehicles = await VehiclesService.getAll().then((response) => {
        return response.data
      })

      setVehicles(vehicles)
    }
    getVehicles()
  }, [])

  return (
    <>
      <Header />
      <main className="w-full p-4 flex items-center justify-center">
        <div className="flex justify-center flex-wrap mx-[-16px] lg:max-w-[83%]">
          {vehicles.map((vehicle) => (
            <VehicleAdvertisement key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </main>
    </>
  )
}
