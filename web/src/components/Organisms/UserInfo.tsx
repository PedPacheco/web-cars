import * as Separator from '@radix-ui/react-separator'
import axios from 'axios'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import UseAuth from '~/hooks/useAuth'
import returnPreviousPage from '~/utils/returnPreviousPage'
import { Input } from '../Atoms/Input'

export function UserInfo() {
  const { user } = UseAuth()
  const { token } = parseCookies()
  const router = useRouter()
  const { register, reset, handleSubmit } = useForm()
  const [state, setState] = useState<string>('')
  const [city, setCity] = useState<string>('')

  useEffect(() => {
    if (token === '') {
      returnPreviousPage()
    }

    reset({
      name: user?.name,
      email: user?.email,
      cep: user?.cep,
      phone: user?.phone,
    })

    async function searchCityAndState() {
      if (user?.cep === '' || user?.cep === undefined) {
        return
      }

      await axios
        .get(`https://viacep.com.br/ws/${user?.cep}/json/`)
        .then((response) => {
          setState(response.data.uf)
          setCity(response.data.localidade)
        })
    }
    searchCityAndState()
  }, [reset, router, token, user?.cep, user?.email, user?.name, user?.phone])

  async function updateUser(data: any) {
    const { cep, email, name, phone } = data
    await axios.put(`http://localhost:3333/users/${user?.id}`, {
      name,
      email,
      cep,
      phone,
    })

    router.reload()
  }
  return (
    <div className="w-full overflow-hidden lg:pt-9 lg:pr-5 lg:pb-8 lg:pl-10">
      <div className="w-full h-60 bg-orange-500 lg:hidden">
        <div className="h-full overflow-visible relative w-[calc(100%-34px)] mx-auto">
          <div className="absolute bottom-4 left-0 text-xl">{user?.name}</div>
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
        <form
          onSubmit={handleSubmit(updateUser)}
          className="w-full flex flex-col lg:flex-row justify-center"
        >
          <div className="lg:w-[calc(50%-12.5px)] lg:max-w-[600px] pr-6">
            <h1 className="text-lg font-semibold text-zinc-300 pt-7 pb-2 px-4 mb-4 lg:pt-0 lg:pl-0">
              Dados Pessoais
            </h1>
            <Input
              text="Email"
              fieldname="email"
              sizetext="text-sm"
              padding="px-5 lg:px-0"
              register={register}
            />
            <Input
              text="Nome"
              fieldname="name"
              sizetext="text-sm"
              padding="px-5 lg:px-0"
              register={register}
            />
          </div>
          <div className="lg:w-[calc(50%-12.5px)] lg:max-w-[600px]">
            <h2 className="text-lg font-semibold text-zinc-300 pt-7 pb-2 px-4 mb-4 lg:pt-0 lg:pl-0">
              Endereço e contato
            </h2>
            <Input
              padding="px-5 lg:px-0"
              text="CEP*"
              fieldname="cep"
              sizetext="text-sm"
              register={register}
            />
            <div className="flex justify-center items-center px-5 lg:px-0 mb-6">
              <div className="w-[calc(50%-12.5px)] pt-4 mr-6">
                <label className="text-sm mb-1 text-zinc-400">Estado*</label>
                <input
                  type="text"
                  disabled
                  value={state}
                  className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors disabled:opacity-50"
                />
              </div>
              <div className="w-[calc(50%-12.5px)] pt-4">
                <label className="text-sm mb-1 text-zinc-400">Cidade*</label>
                <input
                  type="text"
                  disabled
                  value={city}
                  className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors disabled:opacity-50"
                />
              </div>
            </div>
            <Input
              padding="px-5 lg:px-0"
              sizetext="text-sm"
              fieldname="phone"
              text="Telefone*"
              register={register}
            />
            <div className="w-full px-5 lg:px-0 mb-6">
              <div className="w-full flex justify-center lg:justify-start lg:mt-4">
                <button
                  className="w-full h-14 lg:max-w-[230px] rounded-lg flex justify-center items-center px-1 font-medium bg-brand-primary hover:bg-brand-hover text-zinc-100 cursor-pointer"
                  type="submit"
                >
                  Salvar alterações
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
