import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { Input } from '~/components/Input'
import { VehicleRegistratonHeader } from '~/components/VehicleRegistratonHeader'

export default function Specifications() {
  const router = useRouter()
  const { token } = parseCookies()
  const [brand, setBrand] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const [modelYear, setModelYear] = useState<string>('')
  const [yearOfManufacture, setYearOfManufacture] = useState<string>('')
  const [version, setVersion] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [kmTraveled, setKmTraveled] = useState<string>('')
  const [price, setPrice] = useState<string>('')

  function returnForPreviousPage() {
    Router.back()
  }

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
        description,
        price,
      }),
    )
  }

  useEffect(() => {
    if (token === '') {
      router.push('/login')
    }

    const vehicleData = JSON.parse(localStorage.getItem('vehicleData') || '{}')
    setBrand(vehicleData.brand)
    setModel(vehicleData.model)
    setModelYear(vehicleData.modelYear)
    setYearOfManufacture(vehicleData.yearOfManufacture)
    setVersion(vehicleData.version)
    setColor(vehicleData.color)
    setDescription(vehicleData.description)
    setPrice(vehicleData.price)
    setKmTraveled(vehicleData.kmTraveled)
  }, [token, router])

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
                value={brand}
                sizetext="text-lg"
                onChange={(event) => setBrand(event?.target.value)}
              />
              <Input
                text="Modelo"
                padding="px-0"
                value={model}
                sizetext="text-lg"
                onChange={(event) => setModel(event?.target.value)}
              />
              <div className="w-full mb-6 flex">
                <div className="w-[calc(50%-17px)] mr-8">
                  <label className="text-lg mb-1 text-zinc-400">
                    Ano do modelo
                  </label>
                  <input
                    type="text"
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
                    type="text"
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
                onChange={(event) => setVersion(event?.target.value)}
                sizetext="text-lg"
                value={version}
              />
              <Input
                text="Cor"
                padding="px-0"
                onChange={(event) => setColor(event?.target.value)}
                sizetext="text-lg"
                value={color}
              />
            </div>

            <div className="w-[calc(100%-34px)] mx-auto">
              <div className="fixed bottom-0 left-0 z-10 w-full flex md:w-[380px] md:mt-10 md:static md:mx-auto ">
                <button
                  className="hidden w-full bg-zinc-400 flex-grow h-12 cursor-pointer text-lg border-none hover:bg-zinc-300 transition-colors md:block"
                  onClick={returnForPreviousPage}
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
