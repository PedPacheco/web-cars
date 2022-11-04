import Link from 'next/link'
import {
  Car,
  CurrencyDollar,
  MagnifyingGlass,
  SignOut,
  User,
} from 'phosphor-react'
import UseAuth from '~/hooks/useAuth'
import { ListItemForModal } from './ListItemForModal'

export function InformationUser() {
  const { user, signout } = UseAuth()

  return (
    <div className="w-full lg:w-64 mt-4 lg:mt-0 lg:bg-zinc-800">
      <div className="flex flex-col h-screen w-full overflow-hidden">
        <div className="w-full border-b border-zinc-600 lg:mb-4">
          <div className="my-4 relative">
            <div className="w-16 h-16 lg:w- relative mx-auto rounded-full border-4 border-solid border-zinc-600">
              <div className="flex items-center justify-center w-full h-full text-4xl bg-zinc-300 text-zinc-600 rounded-full border-4 border-solid border-zinc-800">
                P
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <h2 className="w-full text-center py-1 overflow-hidden text-zinc-100">
              {user?.name}
            </h2>
            <h3 className="w-full text-center py-1 overflow-hidden text-zinc-300 text-xs">
              {user?.email}
            </h3>
          </div>
        </div>
        <ul className="w-full pt-3 pb-5 overflow-y-auto">
          <ListItemForModal
            text="Buscar Veículo"
            url="/"
            icon={<MagnifyingGlass className="mr-5" size={24} weight="bold" />}
          />
          <ListItemForModal
            text="Vender meu veículo"
            url="/vender-carro/especificacoes"
            icon={<CurrencyDollar className="mr-5" size={24} weight="bold" />}
          />
          <ListItemForModal
            text="Meus anuncios"
            url="/"
            icon={<Car className="mr-5" size={24} weight="bold" />}
          />
          <ListItemForModal
            text="Minha conta"
            url="/garagem/perfil"
            icon={<User className="mr-5" size={24} weight="bold" />}
          />
          <li onClick={signout}>
            <Link href="/">
              <a className="h-12 w-full flex items-center cursor-pointer text-zinc-100 hover:text-zinc-400 transition-colors pr-5 pl-4">
                <SignOut size={24} weight="bold" className="mr-4" />
                Sair
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
