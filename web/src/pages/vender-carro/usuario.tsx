import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '~/components/Input'
import { VehicleRegistratonHeader } from '~/components/VehicleRegistratonHeader'
import UseAuth from '~/hooks/useAuth'

export default function User() {
  const router = useRouter()
  const { token } = parseCookies()
  const { register, handleSubmit, reset } = useForm()
  const { user } = UseAuth()

  function returnForPreviousPage() {
    Router.back()
  }

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

  return (
    <>
      <VehicleRegistratonHeader />
      <main className="min-h-[300px]">
        <section className="py-6">
          <div className="w-[calc(100%-34px)] lg:w-[480px] mx-auto">
            <h1 className="text-xl lg:text-3xl mb-6 lg:mt-8 text-center font-light text-zinc-100">
              Fale um pouco sobre você
            </h1>

            <div>
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
                  fieldname="cep"
                  register={register}
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
                      pathname: '/vender-carro/usuario',
                    }}
                  >
                    <button className="w-full bg-brand-primary flex-grow h-12 cursor-pointer text-lg border-none hover:bg-brand-hover transition-colors md:ml-5">
                      Continuar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
