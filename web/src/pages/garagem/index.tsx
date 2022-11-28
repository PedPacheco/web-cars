import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HeaderMyGabage } from '~/components/HeaderMyGabage'
import { InformationUser } from '~/components/InformationsUser'
import UseAuth from '~/hooks/useAuth'
import { VehicleData } from '../vender-carro/fotos'

interface UserVehicles {
  id: string
  name: string
  email: string
  password: string
  phone: string
  cep: string
  vehicles: VehicleData[]
}

export default function MyAds() {
  const { user } = UseAuth()
  const [userVehicles, setUserVehicles] = useState<UserVehicles>()

  useEffect(() => {
    async function getVehicles() {
      const vehicles = await axios
        .get(`http://localhost:3333/users/${user?.id}`)
        .then((response) => {
          return response.data
        })

      const photos = JSON.parse(userVehicles?.vehicles[0]?.photos)
      setUserVehicles(vehicles)
    }

    getVehicles()
  }, [user?.id])

  console.log(userVehicles?.vehicles[0]?.photos)
  return (
    <div>
      <HeaderMyGabage />
      <div className="flex items-stretch justify-start">
        <div className="hidden lg:block">
          <InformationUser />
        </div>

        <main className="w-full flex justify-start items-stretch overflow-hidden">
          <div className="w-[calc(100%-34px)] mx-auto pb-6 lg:pb-0">
            <div className="flex flex-col relative mb-5">
              <div className="w-full flex flex-col items-center justify-center lg:w-[342px]">
                <div></div>
                <div></div>
                <Image
                  src={userVehicles?.vehicles[0]?.photos.id}
                  width="full"
                  height={240}
                  alt="Imagem principal do veiculo"
                />
              </div>
              <div></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
