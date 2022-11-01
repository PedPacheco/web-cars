import { HeaderMyGabage } from '~/components/HeaderMyGabage'
import { InformationUser } from '~/components/InformationsUser'
import * as Separator from '@radix-ui/react-separator'
import { Input } from '~/components/Input'
import UseAuth from '~/hooks/useAuth'
import { useState } from 'react'

export default function Perfil() {
  const { user } = UseAuth()
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [cep, setCep] = useState<string>('')
  const [phone, setPhone] = useState('')

  return (
    <div>
      <HeaderMyGabage />
      <div className="flex items-stretch justify-start">
        <div className="hidden lg:block">
          <InformationUser />
        </div>
        <main className="w-full flex justify-start items-stretch overflow-hidden">
          <div className="w-full overflow-hidden lg:pt-9 lg:pr-5 lg:pb-8 lg:pl-10">
            <div className="w-full h-60 bg-orange-500 lg:hidden">
              <div className="h-full overflow-visible relative w-[calc(100%-34px)] mx-auto">
                <div className="absolute bottom-4 left-0 text-xl">
                  {user?.name}
                </div>
              </div>
            </div>
            <div className="w-full mb-6 hidden lg:block">
              <div>
                <h1 className="text-2xl font-medium mb-5 ml-3 text-zinc-100">
                  Minha conta
                </h1>
              </div>
              <Separator.Root className="w-full ml-3 border border-solid border-zinc-700" />
            </div>
            <div className="lg:max-w-[1199px] lg:pb-5">
              <div className="w-full flex flex-col lg:flex-row justify-center">
                <div className="lg:w-[calc(50%-12.5px)] max-w-[600px] pr-6">
                  <h1 className="text-lg font-semibold text-zinc-300 pt-7 pb-2 px-4 mb-4 lg:pt-0 lg:pl-0">
                    Dados Pessoais
                  </h1>
                  <Input
                    text="E-mail"
                    sizetext="text-sm"
                    padding="px-5 lg:px-0"
                    value={user?.email}
                  />
                  <Input
                    text="Nome"
                    sizetext="text-sm"
                    padding="px-5 lg:px-0"
                    value={user?.name}
                  />
                </div>
                <div className="lg:w-[calc(50%-12.5px)] max-w-[600px]">
                  <h2 className="text-lg font-semibold text-zinc-300 pt-7 pb-2 px-4 mb-4 lg:pt-0 lg:pl-0">
                    Endereço e contato
                  </h2>
                  <Input
                    padding="px-5 lg:px-0"
                    text="CEP*"
                    sizetext="text-sm"
                    onChange={(event) => setCep(event.target.value)}
                    value={user?.cep}
                  />
                  <div className="flex justify-center items-center px-5 lg:px-0 mb-6">
                    <div className="w-[calc(50%-12.5px)] pt-4 mr-6">
                      <label className="text-sm mb-1 text-zinc-400">
                        Estado*
                      </label>
                      <input
                        type="text"
                        className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div className="w-[calc(50%-12.5px)] pt-4">
                      <label className="text-sm mb-1 text-zinc-400">
                        Cidade*
                      </label>
                      <input
                        type="text"
                        className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <Input
                    padding="px-5 lg:px-0"
                    sizetext="text-sm"
                    text="Telefone"
                    onChange={(event) => setPhone(event.target.value)}
                    value={user?.phone || ''}
                  />
                  <div className="w-full px-5 lg:px-0 mb-6">
                    <div className="w-full flex justify-center">
                      <button className="w-full h-14 rounded-lg flex justify-center items-center px-1 font-medium bg-brand-primary hover:bg-brand-hover text-zinc-100 cursor-pointer">
                        Salvar alterações
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
