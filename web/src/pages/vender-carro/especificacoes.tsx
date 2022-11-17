import Link from 'next/link'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '~/components/Input'
import { VehicleRegistratonHeader } from '~/components/VehicleRegistratonHeader'
import returnPreviousPage from '~/utils/returnPreviousPage'

export default function Specifications() {
  const router = useRouter()
  const { token } = parseCookies()
  const { register, reset, watch } = useForm()
  const [modelYear, setModelYear] = useState<string>('')
  const [yearOfManufacture, setYearOfManufacture] = useState<string>('')
  const [description, setDescription] = useState('')
  const brand = watch('brand')
  const model = watch('model')
  const version = watch('version')
  const color = watch('color')
  const price = watch('price')
  const kmTraveled = watch('kmTraveled')

  function saveInLocalStorage() {
    localStorage.setItem(
      'vehicleData',
      JSON.stringify({
        brand,
        model,
        modelYear,
        yearOfManufacture,
        version,
        color,
        kmTraveled,
        price,
        description,
      }),
    )
  }

  useEffect(() => {
    if (token === '') {
      router.push('/login')
    }

    const vehicleData = JSON.parse(localStorage.getItem('vehicleData') || '{}')
    reset({
      brand: vehicleData.brand,
      model: vehicleData.model,
      version: vehicleData.version,
      color: vehicleData.color,
      price: vehicleData.price,
      kmTraveled: vehicleData.kmTraveled,
    })
    setModelYear(vehicleData.modelYear)
    setYearOfManufacture(vehicleData.yearOfManufacture)
    setDescription(vehicleData.description)
  }, [token, router, reset])

  return (
    <>
      <VehicleRegistratonHeader />
      <main>
        <section className="py-6 ">
          <div className="w-[calc(100%-34px)] px-4 mx-auto my-3 md:w-[480px]">
            <h1 className="text-3xl font-light text-center mb-6 text-zinc-400">
              Vamos começar o seu Anúncio?
            </h1>

            <div className="w-full md:w-96 mx-auto">
              <Input
                text="Marca"
                padding="px-0"
                sizetext="text-lg"
                fieldname="brand"
                register={register}
              />
              <Input
                text="Modelo"
                padding="px-0"
                sizetext="text-lg"
                register={register}
                fieldname="model"
              />
              <div className="w-full mb-6 flex">
                <div className="w-[calc(50%-17px)] mr-8">
                  <label className="text-lg mb-1 text-zinc-400">
                    Ano do modelo
                  </label>
                  <input
                    type="number"
                    value={modelYear}
                    className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors"
                    onChange={(event) => setModelYear(event.target.value)}
                  />
                </div>
                <div className="w-[calc(50%-17px)]">
                  <label className="text-lg mb-1 text-zinc-400">
                    Ano de fabricação
                  </label>
                  <input
                    type="number"
                    value={yearOfManufacture}
                    className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors"
                    onChange={(event) =>
                      setYearOfManufacture(event.target.value)
                    }
                  />
                </div>
              </div>
              <Input
                text="Versão"
                padding="px-0"
                sizetext="text-lg"
                register={register}
                fieldname="version"
              />
              <Input
                text="Cor"
                padding="px-0"
                sizetext="text-lg"
                register={register}
                fieldname="color"
              />
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
                    pathname: '/vender-carro/informacoes',
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
          </div>
        </section>
      </main>
    </>
  )
}
