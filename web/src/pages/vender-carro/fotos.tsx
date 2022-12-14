import * as Separator from '@radix-ui/react-separator'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { VehicleRegistratonHeader } from '~/components/Molecules/VehicleRegistratonHeader'
import { FieldAddPhoto } from '~/components/Organisms/FieldAddPhoto'
import UseAuth from '~/hooks/useAuth'
import { HttpService } from '~/services/http.service'
import { ToastService } from '~/services/toast.service'
import returnPreviousPage from '~/utils/returnPreviousPage'

export interface Photos {
  url: string
  publicId: string
}

export interface VehicleData {
  id: string
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
  photos: Array<Photos>
  createdAt: Date
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
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/dnaqaaqun/image/upload',
        formData,
      )

      setPhotos((photos) => [
        ...photos,
        { url: res.data.url, publicId: res.data.public_id },
      ])
      ToastService.success('Imagem selecionada com sucesso')
    } catch (err) {
      ToastService.error('Erro ao selecionar imagem')
    }
  }

  async function handleRemovePhoto(publicId: string) {
    try {
      await axios.post('/api/handleRemoveImage', {
        publicId,
      })

      setPhotos(photos.filter((photo) => photo.publicId !== publicId))
      ToastService.success('Imagem removida com sucesso')
    } catch (error) {
      ToastService.error('Imagem n??o removida')
    }
  }

  async function saveAdVehicle() {
    try {
      await HttpService.post('http://localhost:3333/vehicles', {
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

      ToastService.success('Anuncio criado com sucesso')
      localStorage.removeItem('photos')
      localStorage.removeItem('vehicleData')
      router.push('/')
    } catch (error) {
      console.log(error)
      ToastService.error('Informa????es do veiculo insuficientes')
    }
  }

  return (
    <>
      <VehicleRegistratonHeader />
      <main>
        <section className="py-7">
          <div className="w-[calc(100%-34px)] mx-auto">
            <h1 className="text-center mb-6 font-light text-xl md:text-3xl md:mt-5 md:leading-[42px] md:mb-3">
              An??ncios com fotos t??m mais chances de vender
              <br />
              Que tal inclu??-las agora?
            </h1>
            <h2 className="max-w-[400px] mx-auto mb-5 leading-[150%] text-center font-light text-xs md:text-base md:font-normal md:leading-8 lg:max-w-full lg:mx-0">
              Escolha fotos claras e n??o inclua logo, banners, textos
              promocionais e marcas d&apos;??gua
            </h2>
            <div className="w-full mb-10 relative">
              <Separator.Root className="w-full h-[1px] absolute top-[50%] left-0 mt-[-0.5px] bg-zinc-400" />
              <span className="table px-5 relative mx-auto text-xs z-10 bg-zinc-900">
                8 fotos dispon??veis
              </span>
            </div>
            <div className="w-full max-w-full md:max-w-[624px] mx-auto overflow-x-scroll md:overflow-visible">
              <div className="w-[1248px] max-w-[1248px] md:w-full ml-[-8px] flex justify-center mx-auto relative">
                <span className="w-[156px] absolute top-[147px] left-0 text-center text-sm font-semibold">
                  Foto principal
                </span>
                <FieldAddPhoto
                  photos={photos}
                  handleAddPhoto={handleAddPhoto}
                  handleRemovePhoto={handleRemovePhoto}
                />
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
