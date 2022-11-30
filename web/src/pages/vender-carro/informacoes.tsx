import Link from 'next/link'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '~/components/Atoms/Input'
import { VehicleRegistratonHeader } from '~/components/Molecules/VehicleRegistratonHeader'
import returnPreviousPage from '~/utils/returnPreviousPage'

export default function Informations() {
  const router = useRouter()
  const { token } = parseCookies()
  const { register, watch, reset } = useForm()
  const [description, setDescription] = useState('')
  const price = watch('price')
  const kmTraveled = watch('kmTraveled')

  useEffect(() => {
    if (token === '') {
      router.push('/login')
      return
    }
    const vehicleData = JSON.parse(localStorage.getItem('vehicleData') || '{}')
    reset({
      kmTraveled: vehicleData.kmTraveled,
      price: vehicleData.price,
    })
    setDescription(vehicleData.description)
  }, [reset, router, token])

  function saveInLocalStorage() {
    const vehicleData = JSON.parse(localStorage.getItem('vehicleData') || '{}')
    localStorage.setItem(
      'vehicleData',
      JSON.stringify({
        brand: vehicleData.brand,
        model: vehicleData.model,
        modelYear: vehicleData.modelYear,
        yearOfManufacture: vehicleData.yearOfManufacture,
        version: vehicleData.version,
        color: vehicleData.color,
        kmTraveled,
        description,
        price,
      }),
    )
  }

  return (
    <>
      <VehicleRegistratonHeader />
      <main className="min-h-[300px]">
        <section className="py-6">
          <div className="w-[calc(100%-34px)] lg:w-[480px] mx-auto">
            <h1 className="text-3xl mt-8 mb-6 text-center font-light text-zinc-100 leading-10">
              Conta mais do seu carro pra gente
            </h1>

            <div>
              <div className="w-full px-4">
                <div className="w-full lg:w-96 mx-auto">
                  <Input
                    text="Quanto seu carro já rodou?*"
                    placeholder="0 km"
                    padding="px-0"
                    sizetext="text-xs"
                    register={register}
                    fieldname="kmTraveled"
                    type="number"
                  />
                </div>
              </div>
              <div className="w-full px-4 pt-6">
                <div className="w-full lg:w-96 mx-auto">
                  <div className="w-full mb-0">
                    <div className="w-full pt-2 relative flex flex-col">
                      <label className=" text-zinc-400 text-sm">
                        Aqui você pode falar um pouco mais sobre os diferenciais
                        do seu carro. Mas não é obrigatório, tá?
                      </label>
                      <textarea
                        maxLength={500}
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                        className="w-full h-9 mt-3 overflow-y-hidden border-b border-zinc-400 bg-transparent outline-0"
                      ></textarea>
                      <span className="w-full text-xs text-right mt-1 text-zinc-400">
                        {description?.length === undefined
                          ? '0'
                          : description.length}
                        /500
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 pt-8">
                <div className="w-full lg:w-96 mx-auto">
                  <Input
                    text="Por quanto você quem vender seu carro?*"
                    placeholder="R$ 0 ,00"
                    sizetext="text-xs"
                    padding="px-0"
                    register={register}
                    fieldname="price"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc(100%-34px)] mx-auto">
            <div className="fixed bottom-0 left-0 z-10 w-full flex md:w-[380px] md:mt-10 md:static md:mx-auto ">
              <button
                className="hidden w-full bg-zinc-400 flex-grow h-12 cursor-pointer text-lg border-none hover:bg-zinc-300 transition-colors md:block"
                onClick={returnPreviousPage}
              >
                Voltar
              </button>

              <Link
                href={{
                  pathname: '/vender-carro/usuario',
                }}
              >
                <button
                  className="w-full bg-brand-primary flex-grow h-12 cursor-pointer text-lg border-none hover:bg-brand-hover transition-colors md:ml-5"
                  onClick={saveInLocalStorage}
                >
                  Continuar
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
