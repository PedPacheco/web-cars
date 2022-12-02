import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from '~/components/Molecules/Header'
import UseAuth from '~/hooks/useAuth'
import { VehiclesService } from '~/services/vehicles.service'
import { VehicleData } from '../vender-carro/fotos'

export default function VehiclePage() {
  const router = useRouter()
  const { id } = router.query
  const { user } = UseAuth()
  const [vehicle, setVehicle] = useState<VehicleData>()

  useEffect(() => {
    async function getVehicle() {
      const vehicle = await VehiclesService.getVehicleById(id).then(
        (response) => {
          return response.data
        },
      )

      setVehicle(vehicle)
    }

    getVehicle()
  }, [id])

  return (
    <>
      <Header />

      <main>
        <section className="w-full px-4 mx-auto pb-6 pt-20 lg:pt-6 lg:max-w-5xl">
          <div className="w-full px-4 mx-auto lg:max-w-5xl">
            <div className="flex py-4 justify-center">
              <div className="w-full px-4 max-w-full md:max-w-[80%]">
                <h3 className="text-2xl">
                  <span className="font-bold">
                    {vehicle?.brand.toUpperCase()}{' '}
                  </span>
                  <span>{vehicle?.version.toUpperCase()}</span>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
