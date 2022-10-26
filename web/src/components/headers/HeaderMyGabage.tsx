import Image from 'next/image'
import Link from 'next/link'
import {
  Car,
  CurrencyDollar,
  List,
  MagnifyingGlass,
  SignOut,
  User,
  X,
} from 'phosphor-react'
import { useState } from 'react'
import UseAuth from '~/hooks/useAuth'
import logoWebMotors from '../../assets/logoWebMotors.png'
import { ListItemForModal } from '../ListItems/ListItemForModal'

export function HeaderMyGabage() {
  const { user, signout } = UseAuth()
  const [openModal, setOpenModal] = useState(false)

  console.log(openModal)
  return (
    <header className="h-14 lg:h-20 flex items-center bg-zinc-800">
      <div className="w-full flex items-stretch px-4 lg:pr-9 lg:pl-14">
        <div className="flex justify-start items-center font-medium">
          <Link href="/">
            <a className="flex flex-grow h-full justify-start items-center mr-3">
              <Image
                src={logoWebMotors}
                alt="logo do site"
                width={28}
                height={28}
              />
            </a>
          </Link>
          <span>Minha conta</span>
        </div>
        <div className="flex ml-auto justify-end">
          <div>
            <button
              className="ml-1 flex justify-center items-center cursor-pointer rounded-[36px]"
              onClick={() => setOpenModal(true)}
            >
              <List size={36} />
            </button>
          </div>
          <div
            className={`w-[306px] ${
              openModal ? 'opacity-100' : 'opacity-0'
            } absolute top-0 right-0 h-screen ${
              openModal ? 'z-50' : '-z-10'
            } bg-zinc-700 transition-all duration-500`}
          >
            <button
              className="absolute top-4 right-6 z-10"
              onClick={() => setOpenModal(false)}
            >
              <X size={18} weight="bold" />
            </button>
            <div className="w-full mt-4">
              <div className="flex flex-col h-screen w-full overflow-hidden">
                <div className="w-full border-b border-zinc-600">
                  <div className="my-4 relative">
                    <div className="w-14 h-14 relative mx-auto rounded-full border-4 border-solid border-zinc-600">
                      <div className="flex items-center justify-center w-full h-full text-4xl bg-zinc-300 text-zinc-600 rounded-full border-4 border-solid border-zinc-700">
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
                    icon={
                      <MagnifyingGlass
                        className="mr-5"
                        size={24}
                        weight="bold"
                      />
                    }
                  />
                  <ListItemForModal
                    text="Vender meu veículo"
                    url="/"
                    icon={
                      <CurrencyDollar
                        className="mr-5"
                        size={24}
                        weight="bold"
                      />
                    }
                  />
                  <ListItemForModal
                    text="Meus anuncios"
                    url="/"
                    icon={<Car className="mr-5" size={24} weight="bold" />}
                  />
                  <ListItemForModal
                    text="Minha conta"
                    url="/"
                    icon={<User className="mr-5" size={24} weight="bold" />}
                  />
                  <li onClick={signout}>
                    <Link href="/">
                      <a className="h-12 w-full flex items-center cursor-pointer text-zinc-100 pr-5 pl-4">
                        <SignOut size={24} weight="bold" className="mr-4" />
                        Sair
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
