import * as Separator from '@radix-ui/react-separator'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { VehiclePhoto } from '~/components/VehiclePhoto'
import { VehicleRegistratonHeader } from '~/components/VehicleRegistratonHeader'
import UseAuth from '~/hooks/useAuth'
import returnPreviousPage from '~/utils/returnPreviousPage'

interface Photos {
  url: string
  publicId: string
}

interface VehicleData {
  userId: string
  brand: string
  model: string
  modelYear: string
  version: string
  yearOfManufacture: string
  color: string
  kmTraveled: string
  description: string
  price: string
  photos: JSON
}

export default function Photos() {
  const router = useRouter()
  const { user } = UseAuth()
  const [photos, setPhotos] = useState<Photos[]>([])
  const [vehicleData, setVehicleData] = useState({} as VehicleData)

  useEffect(() => {
    const savedPhotos = JSON.parse(localStorage.getItem('photos') || '[]')
    const vehicleData = JSON.parse(localStorage.getItem('vehicleData') || '{}')
    setVehicleData(vehicleData)
    setPhotos(savedPhotos)
  }, [])

  useEffect(() => {
    if (photos.length !== 0) {
      localStorage.setItem('photos', JSON.stringify(photos))
    }
  }, [photos])

  async function handleAddPhoto(file: File) {
    const formData = new FormData()
    formData.append('file', file as Blob)
    formData.append('upload_preset', 'web-cars')
    formData.append('cloud_name', 'dnaqaaqun')

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dnaqaaqun/image/upload',
        {
          method: 'POST',
          body: formData,
        },
      )

      const data = await res.json()
      setPhotos((photos) => [
        ...photos,
        { url: data.url, publicId: data.public_id },
      ])
    } catch (err) {
      console.log(err)
    }
  }

  async function handleRemovePhoto(publicId: string) {
    const response = await axios.post('/api/handleRemoveImage', {
      publicId,
    })

    if (response.data === 'ok') {
      setPhotos(photos.filter((photo) => photo.publicId !== publicId))
    }
  }

  async function saveAdVehicle() {
    const response = await axios
      .post('http://localhost:3333/vehicles', {
        userId: user?.id,
        brand: vehicleData.brand,
        model: vehicleData.model,
        modelYear: Number(vehicleData.modelYear),
        yearOfManufacture: Number(vehicleData.yearOfManufacture),
        version: vehicleData.version,
        color: vehicleData.color,
        kmTraveled: Number(vehicleData.kmTraveled),
        description: vehicleData.description,
        price: Number(vehicleData.price),
        photos,
      })
      .catch((error) => {
        console.log(error)
        // const status = error.response.status

        // if (status === 422) {
        //   return console.log('Informações do veiculo insuficientes')
        // }
      })
    console.log(response)

    // router.push('/')
  }

  return (
    <>
      <VehicleRegistratonHeader />
      <main>
        <section className="py-7">
          <div className="w-[calc(100%-34px)] mx-auto">
            <h1 className="text-center mb-6 font-light text-xl md:text-3xl md:mt-5 md:leading-[42px] md:mb-3">
              Anúncios com fotos têm mais chances de vender
              <br />
              Que tal incluí-las agora?
            </h1>
            <h2 className="max-w-[400px] mx-auto mb-5 leading-[150%] text-center font-light text-xs md:text-base md:font-normal md:leading-8 lg:max-w-full lg:mx-0">
              Escolha fotos claras e não inclua logo, banners, textos
              promocionais e marcas d&apos;água
            </h2>
            <div className="w-full mb-10 relative">
              <Separator.Root className="w-full h-[1px] absolute top-[50%] left-0 mt-[-0.5px] bg-zinc-400" />
              <span className="table px-5 relative mx-auto text-xs z-10 bg-zinc-900">
                8 fotos disponíveis
              </span>
            </div>
            <div className="w-full max-w-full md:max-w-[624px] mx-auto overflow-x-scroll md:overflow-visible">
              <div className="w-[1248px] max-w-[1248px] md:w-full ml-[-8px] flex justify-center mx-auto relative">
                <span className="w-[156px] absolute top-[147px] left-0 text-center text-sm font-semibold">
                  Foto principal
                </span>
                <div className="w-full flex flex-wrap justify-center overflow-hidden">
                  <VehiclePhoto
                    imageUrl={
                      photos[0]
                        ? photos[0].url
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      handleAddPhoto(file)
                    }}
                    id={photos[0]?.publicId !== '' ? photos[0]?.publicId : ''}
                    handleRemovePhoto={handleRemovePhoto}
                  />
                  <VehiclePhoto
                    imageUrl={
                      photos[1]
                        ? photos[1].url
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      handleAddPhoto(file)
                    }}
                    id={photos[1]?.publicId !== '' ? photos[1]?.publicId : ''}
                    handleRemovePhoto={handleRemovePhoto}
                  />
                  <VehiclePhoto
                    imageUrl={
                      photos[2]
                        ? photos[2].url
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      handleAddPhoto(file)
                    }}
                    id={photos[2]?.publicId !== '' ? photos[2]?.publicId : ''}
                    handleRemovePhoto={handleRemovePhoto}
                  />
                  <VehiclePhoto
                    imageUrl={
                      photos[3]
                        ? photos[3].url
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      handleAddPhoto(file)
                    }}
                    id={photos[3]?.publicId !== '' ? photos[3]?.publicId : ''}
                    handleRemovePhoto={handleRemovePhoto}
                  />
                  <VehiclePhoto
                    imageUrl={
                      photos[4]
                        ? photos[4].url
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      handleAddPhoto(file)
                    }}
                    id={photos[4]?.publicId !== '' ? photos[4]?.publicId : ''}
                    handleRemovePhoto={handleRemovePhoto}
                  />
                  <VehiclePhoto
                    imageUrl={
                      photos[5]
                        ? photos[5].url
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      handleAddPhoto(file)
                    }}
                    id={photos[5]?.publicId !== '' ? photos[5]?.publicId : ''}
                    handleRemovePhoto={handleRemovePhoto}
                  />
                  <VehiclePhoto
                    imageUrl={
                      photos[6]
                        ? photos[6].url
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      handleAddPhoto(file)
                    }}
                    id={photos[6]?.publicId !== '' ? photos[6]?.publicId : ''}
                    handleRemovePhoto={handleRemovePhoto}
                  />
                  <VehiclePhoto
                    imageUrl={
                      photos[7]
                        ? photos[7].url
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      handleAddPhoto(file)
                    }}
                    id={photos[7]?.publicId !== '' ? photos[7]?.publicId : ''}
                    handleRemovePhoto={handleRemovePhoto}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc(100%-34px)] mx-auto">
            <div className="fixed bottom-0 left-0 z-10 w-full flex md:w-[380px] md:mt-10 md:static md:mx-auto ">
              <button
                className="hidden w-full bg-zinc-400 flex-grow h-12 cursor-pointer text-sm font-medium border-none hover:bg-zinc-300 transition-colors md:block"
                onClick={returnPreviousPage}
              >
                Voltar
              </button>

              <button
                onClick={saveAdVehicle}
                className="w-full bg-brand-primary flex-grow h-12 cursor-pointer text-sm font-medium border-none hover:bg-brand-hover transition-colors md:ml-5"
              >
                {photos.length !== 0 ? 'Continuar' : 'Inserir fotos depois'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
