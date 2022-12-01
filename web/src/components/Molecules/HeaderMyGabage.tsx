import * as Separator from '@radix-ui/react-separator'
import Image from 'next/image'
import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import UseAuth from '~/hooks/useAuth'
import logoWebMotors from '../../assets/logoWebMotors.png'
import { InformationUser } from '../Molecules/InformationsUser'

export function HeaderMyGabage() {
  const { user } = UseAuth()
  const [openModal, setOpenModal] = useState(false)

  return (
    <header className="h-14 lg:h-20 flex items-center bg-zinc-800">
      <div className="w-full flex items-stretch px-4 lg:pr-9 lg:pl-14">
        <div className="flex justify-start items-center font-medium lg:hidden">
          <Link href="/">
            <a className="flex flex-grow h-full justify-start items-center mr-3 ">
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
        <div className="hidden lg:flex lg:justify-center lg:items-center">
          <Link href="/">
            <a className="flex justify-start items-center flex-grow">
              <Image
                src={
                  'https://theme.zdassets.com/theme_assets/9588016/cc14d7ac81c746f8b560135fb73ee3f1eca56a54.png'
                }
                alt="Imagem do logo"
                height={29}
                width={150}
              />
            </a>
          </Link>
          <div>
            <Separator.Root
              className="flex mx-12 border h-9 border-solid border-zinc-500 "
              data-orientation="vertical"
            />
          </div>
          <Link href="">
            <a className="flex justify-start items-center flex-grow">
              Minha garagen
            </a>
          </Link>
        </div>
        <div className="hidden lg:flex lg:justify-end ml-auto">
          <div className="mr-2">
            <p className="text-right text-xs flex flex-col">
              <strong>{user?.name}</strong>
              <span className="opacity-50">{user?.email}</span>
            </p>
          </div>
          <div>
            <div className="flex items-center justify-center w-9 h-9 relative mx-auto rounded-full bg-zinc-300 text-zinc-900 text-lg font-medium">
              {user?.name[0]}
            </div>
          </div>
        </div>
        <div className="flex ml-auto justify-end lg:hidden">
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
            } bg-zinc-800 transition-all duration-500`}
          >
            <button
              className="absolute top-4 right-6 z-10"
              onClick={() => setOpenModal(false)}
            >
              <X size={18} weight="bold" />
            </button>
            <InformationUser />
          </div>
        </div>
      </div>
    </header>
  )
}
