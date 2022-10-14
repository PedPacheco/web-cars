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
            url="/sell-my-car"
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
                    width={40}
                    height={40}
                    className=" rounded-[50%] md:w-auto mr-2"
                  />
                )}
              </div>

              <div
                className={`${
                  open ? 'block' : 'hidden'
                } w-56 absolute top-[70px] left-[-180px] bg-brand-primary shadow-2xl transition-all`}
              >
                <ul className="w-[100%] flex flex-col justify-center items-center">
                  <li className="mt-3 flex items-center w-[70%]">
                    <Car size={18} weight="bold" />
                    <Link href="/">
                      <a className="font-bold text-zinc-100 text-sm md:w-auto px-3 py-2 rounded">
                        Venda seu carro
                      </a>
                    </Link>
                  </li>
                  <li className="mt-3 flex items-center w-[70%]">
                    <SoccerBall size={18} weight="bold" />
                    <Link href="/">
                      <a className="font-bold text-zinc-100 text-sm md:w-auto px-3 py-2 rounded">
                        Meus anuncios
                      </a>
                    </Link>
                  </li>
                  <li className="mt-3 flex items-center w-[70%]">
                    <PencilSimple size={18} weight="bold" />
                    <Link href="/">
                      <a className="font-bold text-zinc-100 text-sm md:w-auto px-3 py-2 rounded">
                        Minha conta
                      </a>
                    </Link>
                  </li>
                  <li
                    className="mt-3 mb-2 flex items-center w-[70%]"
                    onClick={signout}
                  >
                    <SignOut size={18} weight="bold" />
                    <Link href="/">
                      <a className="font-bold text-zinc-100 text-sm md:w-auto px-3 py-2 rounded">
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
