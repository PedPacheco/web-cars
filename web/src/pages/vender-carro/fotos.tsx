import * as Separator from '@radix-ui/react-separator'
import { useState } from 'react'
import { VehiclePhoto } from '~/components/VehiclePhoto'
import { VehicleRegistratonHeader } from '~/components/VehicleRegistratonHeader'
import returnPreviousPage from '~/utils/returnPreviousPage'

export default function Photos() {
  const [photos, setPhotos] = useState<string[]>([])
  const [publicId, setPublicId] = useState<string>('')
  const [firstInputEnabled, setFirstInputEnabled] = useState<boolean>(false)

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
      setPublicId(data.public_id)
      setPhotos((photos) => [...photos, data.url])
    } catch (err) {
      console.log(err)
    }
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
                        ? photos[0]
                        : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
                    }
                    onChange={(event) => {
                      const file = (event.target as HTMLInputElement).files![0]
                      if (!file) {
                        return
                      }
                      setFirstInputEnabled(true)
                      handleAddPhoto(file)
                    }}
                    disabled={firstInputEnabled}
                    id={publicId !== '' ? publicId : ''}
                  />
                  <VehiclePhoto
                    imageUrl="https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg"
                    id=""
                  />
                  <VehiclePhoto
                    imageUrl="https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg"
                    id=""
                  />
                  <VehiclePhoto
                    imageUrl="https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg"
                    id=""
                  />
                  <VehiclePhoto
                    imageUrl="https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg"
                    id=""
                  />
                  <VehiclePhoto
                    imageUrl="https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg"
                    id=""
                  />
                  <VehiclePhoto
                    imageUrl="https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg"
                    id=""
                  />
                  <VehiclePhoto
                    imageUrl="https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg"
                    id=""
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

              <button className="w-full bg-brand-primary flex-grow h-12 cursor-pointer text-sm font-medium border-none hover:bg-brand-hover transition-colors md:ml-5">
                Inserir fotos depois
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
