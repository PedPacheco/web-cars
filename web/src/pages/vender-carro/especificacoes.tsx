import { ErrorMessage } from '@hookform/error-message'
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
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [description, setDescription] = useState('')
  const brand = watch('brand')
  const model = watch('model')
  const version = watch('version')
  const color = watch('color')
  const price = watch('price')
  const kmTraveled = watch('kmTraveled')
  const yearOfManufacture = watch('yearOfManufacture')
  const modelYear = watch('modelYear')

  console.log(errors)
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

    router.push('/vender-carro/informacoes')
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
      modelYear: vehicleData.modelYear,
      yearOfManufacture: vehicleData.yearOfManufacture,
    })
    setDescription(vehicleData.description)
  }, [token, router, reset])

  return (
    <>
      <VehicleRegistratonHeader />
      <main>
        <section className="py-6 ">
          <form
            className="w-[calc(100%-34px)] px-4 mx-auto my-3 md:w-[480px]"
            onSubmit={handleSubmit(saveInLocalStorage)}
          >
            <h1 className="text-3xl font-light text-center mb-6 text-zinc-400">
              Vamos começar o seu Anúncio?
            </h1>

            <div className="w-full md:w-96 mx-auto">
              <Input
                text="Marca*"
                name="brand"
                padding="px-0"
                sizetext="text-lg"
                fieldname="brand"
                rules={{ required: 'Marca deve ser inserida' }}
                register={register}
              />

              <ErrorMessage
                errors={errors}
                name="brand"
                render={({ message }) => <p>{message}</p>}
              />

              <Input
                text="Modelo*"
                padding="px-0"
                sizetext="text-lg"
                register={register}
                rules={{ required: 'Modelo deve ser inserido' }}
                fieldname="model"
              />
              <div className="w-full mb-6 flex">
                <div className="w-[calc(50%-17px)] mr-8">
                  <label className="text-lg mb-1 text-zinc-400">
                    Ano do modelo*
                  </label>
                  <input
                    type="number"
                    className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors"
                    {...register('modelYear', {
                      required: 'Ano do modelo deve ser inserido',
                    })}
                  />
                </div>
                <div className="w-[calc(50%-17px)]">
                  <label className="text-lg mb-1 text-zinc-400">
                    Ano de fabricação*
                  </label>
                  <input
                    type="number"
                    className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors"
                    {...register('yearOfManufacture', {
                      required: 'Ano de fabricação deve ser inserido',
                    })}
                  />
                </div>
              </div>
              <Input
                text="Versão*"
                padding="px-0"
                sizetext="text-lg"
                register={register}
                rules={{ required: 'Versão deve ser inserido' }}
                fieldname="version"
              />
              <Input
                text="Cor*"
                padding="px-0"
                sizetext="text-lg"
                register={register}
                rules={{ required: 'Cor deve ser inserida' }}
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
                <input
                  className="w-full bg-brand-primary flex-grow h-12 cursor-pointer text-lg border-none hover:bg-brand-hover transition-colors md:ml-5"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
