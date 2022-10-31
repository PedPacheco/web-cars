import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { Input } from '~/components/Input'
import { VehicleRegistratonHeader } from '~/components/VehicleRegistratonHeader'
import UseAuth from '~/hooks/useAuth'

export default function User() {
  const router = useRouter()
  const { token } = parseCookies()
  const { user } = UseAuth()
  const [phone, setPhone] = useState<string | null | undefined>('')
  const [cep, setCep] = useState<string | null | undefined>('')

  function returnForPreviousPage() {
    Router.back()
  }

  useEffect(() => {
    if (token === '') {
      router.push('/login')
    }

    setPhone(user?.phone)
    setCep(user?.cep)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, token])

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
                  value={user?.email || ''}
                />
                <Input
                  sizetext="text-xs"
                  padding="px-0"
                  text="Nome Completo*"
                  disabled
                  value={user?.name || ''}
                />
                <Input
                  sizetext="text-xs"
                  padding="px-0"
                  text="Telefone*"
                  disabled={!!user?.phone}
                  value={phone || ''}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <Input
                  sizetext="text-xs"
                  padding="px-0"
                  text="Cep*"
                  value={cep || ''}
                  onChange={(event) => setCep(event.target.value)}
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
