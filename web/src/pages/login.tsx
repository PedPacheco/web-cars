import { Header } from '~/components/Header'

import { X, FacebookLogo, GoogleLogo, AppleLogo } from 'phosphor-react'

import * as Separator from '@radix-ui/react-separator'

export default function Login() {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center lg:mt-20">
        <div className="bg-zinc-800 relative w-full py-8 px-5 lg:w-[634px] lg:rounded-lg lg:pt-16 lg:pb-9 lg:px-8">
          <X size={24} className="absolute top-5 right-5" />
          <div className="flex flex-col h-full">
            <div className="flex h-full flex-col lg:flex-row">
              <section className="w-full">
                <h1 className="mt-5 mb-6 font-medium text-2xl text-zinc-100 lg:mb-5">
                  Entre na sua conta! ;)
                </h1>
                <div>
                  <button className="w-full h-10 rounded-lg text-xs font-medium p-2 flex items-center justify-start bg-[#3b5998] mb-4">
                    <FacebookLogo size={24} className="mr-5" />
                    <p className="mr-15 font-medium flex-grow">
                      Entrar com Facebook
                    </p>
                  </button>
                  <button className="w-full h-10 rounded-lg text-xs font-medium p-2 flex items-center justify-start bg-white mb-4">
                    <GoogleLogo size={24} className="mr-5 text-zinc-600" />
                    <p className="mr-15 font-medium flex-grow text-zinc-600">
                      Entrar com Google
                    </p>
                  </button>
                  <button className="w-full h-10 rounded-lg text-xs font-medium p-2 flex items-center justify-center bg-neutral-900 mb-4">
                    <AppleLogo size={24} className="mr-4 text-white" />
                    <p className="mr-15 font-medium flex-grow text-white">
                      Entrar com Apple
                    </p>
                  </button>
                </div>
              </section>
              <Separator.Root className="relative my-4 border border-solid border-zinc-700 lg:mx-8">
                <p className="absolute left-1/2 top-[-12px] lg:top-1/2 lg:left-[-20px] bg-zinc-800 px-2">
                  OU
                </p>
              </Separator.Root>
              <section>
                <h1 className="mt-5 mb-6 font-medium text-2xl text-zinc-100 lg:mb-5">
                  Digite sua senha e e-mail
                </h1>
                <form>
                  <div className="mb-8">
                    <div className="relative rounded-lg h-14 mt-3 lg:h-10">
                      <input
                        id="email"
                        className="w-full h-full py-3 pr-11 pl-4 rounded-lg border-2 border-zinc-400 bg-zinc-800"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-3 top-[-12px] px-2 text-zinc-400 text-base bg-zinc-800"
                      >
                        E-mail
                      </label>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="relative rounded-lg h-14 mt-3">
                      <input
                        id="password"
                        className="w-full h-full py-3 pr-11 pl-4 rounded-lg border-2 border-zinc-400 bg-zinc-800"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-3 top-[-12px] px-2 text-zinc-400 text-base bg-zinc-800"
                      >
                        Senha
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full h-14 px-3 py-4 font-bold rounded-lg flex items-center justify-center bg-red-600"
                  >
                    Entrar
                  </button>
                </form>
              </section>
            </div>
            <p className="text-center text-zinc-100 mt-8">
              Não tem uma conta?
              <button className="ml-1 font-bold text-red-600">
                Crie a sua
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
