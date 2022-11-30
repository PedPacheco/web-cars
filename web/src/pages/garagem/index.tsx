import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { HeaderMyGabage } from '~/components/Organisms/HeaderMyGabage'
import { InformationUser } from '~/components/Organisms/InformationsUser'
import { VehicleAdvertisement } from '~/components/Organisms/VehicleAdvertisement'
import UseAuth from '~/hooks/useAuth'
import { ToastService } from '~/services/toast.service'
import { VehiclesService } from '~/services/vehicles.service'
import returnPreviousPage from '~/utils/returnPreviousPage'
import { VehicleData } from '../vender-carro/fotos'

export default function MyAds() {
  const { user } = UseAuth()
  const { token } = parseCookies()
  const [userVehicles, setUserVehicles] = useState([] as VehicleData[])

  useEffect(() => {
    async function getVehicles() {
      try {
        if (token === '') {
          returnPreviousPage()
          return
        }

        if (!user) {
          return
        }

        const vehicles = await VehiclesService.getUserById(user.id).then(
          (response) => {
            return response.data
          },
        )

        setUserVehicles(vehicles)
      } catch (error) {
        console.log(error)
        ToastService.error('Erro ao pegar seus veiculos')
      }
    }

    getVehicles()
  }, [token, user])

  return (
    <div>
      <HeaderMyGabage />
      <div className="flex items-stretch justify-start">
        <div className="hidden lg:block">
          <InformationUser />
        </div>

        <main className="w-full flex flex-col justify-start items-stretch overflow-hidden">
          {userVehicles.map((vehicle, index) => (
            <VehicleAdvertisement index={index} key={index} vehicle={vehicle} />
          ))}
        </main>
      </div>
    </div>
  )
}
