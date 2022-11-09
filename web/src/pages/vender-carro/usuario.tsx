import axios from 'axios'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '~/components/Input'
import { VehicleRegistratonHeader } from '~/components/VehicleRegistratonHeader'
import UseAuth from '~/hooks/useAuth'
import returnPreviousPage from '~/utils/returnPreviousPage'

export default function User() {
  const router = useRouter()
  const { token } = parseCookies()
  const { register, reset, handleSubmit } = useForm()
  const { user } = UseAuth()

  useEffect(() => {
    if (token === '') {
      router.push('/login')
    }

    reset({
      name: user?.name,
      email: user?.email,
      cep: user?.cep || '',
      phone: user?.phone || '',
    })
  }, [reset, router, token, user?.cep, user?.email, user?.name, user?.phone])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function onSubmit(data: any) {
    const { cep, phone } = data

    if (cep || phone) {
      await axios.put(`http://localhost:3333/users/${user?.id}`, {
        cep,
        phone,
      })
    }

    router.push('/vender-carro/fotos')
  }

  return (
    <>
      <VehicleRegistratonHeader />
      <main className="min-h-[300px]">
        <section className="py-6">
          <div className="w-[calc(100%-34px)] lg:w-[480px] mx-auto">
            <h1 className="text-xl lg:text-3xl mb-6 lg:mt-8 text-center font-light text-zinc-100">
              Fale um pouco sobre você
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full lg:w-[380px] lg:mx-auto">
                <Input
                  sizetext="text-xs"
                  padding="px-0"
                  text="E-mail*"
                  disabled
                  register={register}
                  fieldname="email"
                />
                <Input
                  sizetext="text-xs"
                  padding="px-0"
                  text="Nome Completo*"
                  register={register}
                  disabled
                  fieldname="name"
                />
                <Input
                  sizetext="text-xs"
                  padding="px-0"
                  text="Telefone*"
                  disabled={!!user?.phone}
                  fieldname="phone"
                  register={register}
                />
                <Input
                  sizetext="text-xs"
                  padding="px-0"
                  text="Cep*"
                  disabled={!!user?.cep}
                  fieldname="cep"
                  register={register}
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

                  <button
                    className="w-full bg-brand-primary flex-grow h-12 cursor-pointer text-lg border-none hover:bg-brand-hover transition-colors md:ml-5"
                    type="submit"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
