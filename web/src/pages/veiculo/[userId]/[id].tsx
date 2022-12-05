/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { useRouter } from 'next/router'
import { Calendar, Gauge, Palette } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Header } from '~/components/Molecules/Header'
import { IconForSpecifications } from '~/components/Molecules/IconForSpecifications'
import { SendEmail } from '~/components/Molecules/SendEmail'
import { VehiclesService } from '~/services/vehicles.service'
import { VehicleData } from '../../vender-carro/fotos'

interface User {
  id: string
  name: string
  email: string
  password: string
  phone: string
  cep: string
}

export default function VehiclePage() {
  const router = useRouter()
  const { id, userId } = router.query
  const [state, setState] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [user, setUser] = useState({} as User)
  const [vehicle, setVehicle] = useState<VehicleData>()

  useEffect(() => {
    async function getVehicle() {
      const user = await VehiclesService.getVehicleById(userId, id).then(
        (response) => {
          return response.data
        },
      )

      if (!user) {
        return
      }

      setVehicle(user.vehicles[0])
      setUser(user)

      async function searchCityAndState() {
        if (user?.cep === '' || user?.cep === undefined) {
          return
        }

        await axios
          .get(`https://viacep.com.br/ws/${user?.cep}/json/`)
          .then((response) => {
            setState(response.data.uf)
            setCity(response.data.localidade)
          })
      }

      searchCityAndState()
    }

    getVehicle()
  }, [id, userId])

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
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 max-w-full md:max-w-[60%]">
                <div className="w-full mb-2">
                  <Swiper
                    pagination={{
                      type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {vehicle?.photos.map((photo, index) => (
                      <SwiperSlide key={index}>
                        <img src={photo.url} alt="Foto do veiculo" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="flex flex-wrap justify-center">
                  <IconForSpecifications
                    icon={
                      <Calendar size={20} weight="bold" className="inline" />
                    }
                    text={`${vehicle?.yearOfManufacture}/${vehicle?.modelYear}`}
                  />
                  <IconForSpecifications
                    icon={<Gauge size={20} weight="bold" className="inline" />}
                    text={`${vehicle?.kmTraveled} Km`}
                  />
                  <IconForSpecifications
                    icon={
                      <Palette size={20} weight="bold" className="inline" />
                    }
                    text={`${vehicle?.color}`}
                  />
                </div>
                <div className="w-full max-w-full rounded-lg p-4 mt-4 shadow-lg bg-zinc-800">
                  <p className="font-bold text-lg mb-4">Descrição</p>
                  <p>{vehicle?.description}</p>
                </div>
                <div className="w-full max-w-full rounded-lg p-4 mt-4 shadow-lg bg-zinc-800">
                  <h2 className="text-xs text-zinc-400">Sobre o vendedor</h2>
                  <div className="pt-2 pb-6">
                    <h2 className="text-2xl text-zinc-300">{user.name}</h2>
                    <span>
                      {city}, {state}
                    </span>
                  </div>
                  <div className="flex">
                    <strong className="items-start text-4xl h-14 font-medium overflow-hidden">
                      {user.phone}
                    </strong>
                  </div>
                </div>
              </div>
              <SendEmail />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
