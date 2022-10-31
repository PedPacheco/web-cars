import Image from 'next/image'
import Link from 'next/link'
import {
  Car,
  House,
  PencilSimple,
  Phone,
  SignIn,
  SignOut,
  SoccerBall,
} from 'phosphor-react'
import { useState } from 'react'
import UseAuth from '~/hooks/useAuth'
import perfil from '../assets/perfil.jpg'
import { ListItem } from './ListItem'
import { ListItemForModal } from './ListItemForModal'

export function Header() {
  const { user, signout } = UseAuth()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky z-10 w-full top-0 px-4 min-h-[76px] bg-brand-primary shadow-md">
      <nav className="flex justify-between items-center p-3 ">
        <Link href="/">
          <a className="p-2 mr-4 inline-flex items-center">
            <Image
              src="https://tonyveiculos.com.br/img/logo.png"
              alt="Logotipo do site"
              width={100}
              height={50}
            />
          </a>
        </Link>

        <ul
          className={`flex items-center justify-between w-[70%] md:w-[500px] md:flex-row pl-3 `}
        >
          <ListItem
            url="/"
            text="Home"
            icon={<House size={24} weight="bold" />}
          />

          <ListItem
            url="/"
            text="Carros à venda"
            icon={<Car size={24} weight="bold" />}
          />

          <ListItem
            url="/contato"
            text="Contato"
            icon={<Phone size={24} weight="bold" />}
          />

          {!user ? (
            <ListItem
              url="/login"
              text="Login"
              icon={<SignIn size={24} weight="bold" className="" />}
            />
          ) : (
            <li className="mt-3 md:mt-0 md:flex-row md:ml-auto relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {user.avatar ? (
                  <Image
                    src={user.avatar}
                    alt="Foto de perfil"
                    width={40}
                    height={40}
                    className=" rounded-[50%] md:w-auto mr-2"
                  />
                ) : (
                  <Image
                    src={perfil}
                    alt="Foto de perfil"
                    width={48}
                    height={48}
                    className=" rounded-[50%] md:w-auto mr-2"
                  />
                )}
              </div>

              <div
                className={`${
                  open ? 'block' : 'hidden'
                } w-56 absolute top-[70px] left-[-180px] bg-brand-primary shadow-2xl transition-all`}
              >
                <ul className="w-[100%]">
                  <ListItemForModal
                    text="Venda seu carro"
                    url="/vender-carro/especificacoes"
                    icon={<Car size={18} weight="bold" className="mr-4" />}
                  />
                  <ListItemForModal
                    text="Meus anuncios"
                    url="/"
                    icon={
                      <SoccerBall size={18} weight="bold" className="mr-4" />
                    }
                  />
                  <ListItemForModal
                    text="Minha conta"
                    url="/garagem/perfil"
                    icon={
                      <PencilSimple size={18} weight="bold" className="mr-4" />
                    }
                  />
                  <li onClick={signout}>
                    <Link href="/">
                      <a className="h-12 w-full flex items-center cursor-pointer text-zinc-100 hover:text-zinc-400 transition-colors pr-5 pl-4">
                        <SignOut size={18} weight="bold" className="mr-4" />
                        Sair
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
