import Image from 'next/image'
import Link from 'next/link'
import { Car, List, PencilSimple, SignOut, SoccerBall } from 'phosphor-react'
import { useState } from 'react'
import UseAuth from '~/hooks/useAuth'
import { ListItem } from './ListItem'

export function Header() {
  const [open, setOpen] = useState(false)
  const { user } = UseAuth()

  function showOptions() {
    setOpen(!open)
  }

  return (
    <header className="sticky z-10 w-full top-0 px-4 min-h-[76px] bg-brand-primary">
      <nav className="flex justify-between items-center p-3 flex-wrap">
        <Link href="/" className="p-2 mr-4 inline-flex items-center">
          <a>
            <Image
              src="https://tonyveiculos.com.br/img/logo.png"
              alt="Logotipo do site"
              width={100}
              height={50}
            />
          </a>
        </Link>

        <button
          className="text-white p-3 rounded lg:hidden ml-auto"
          onClick={showOptions}
        >
          <List size={24} />
        </button>

        <ul
          className={`${
            open ? 'hidden' : 'flex'
          } flex-col items-center w-full lg:w-[680px] lg:flex-row pl-3 lg:flex`}
        >
          <ListItem url="/" text="Home" />
          <ListItem url="/" text="Estoque" />
          <ListItem url="/sell-my-car" text="Vender meu carro" />
          <ListItem url="/contato" text="Contato" />

          {!user ? (
            <ListItem url="/login" text="Login" />
          ) : (
            <li className="mt-3 lg:mt-0 lg:flex-row lg:ml-auto relative">
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  className="w-10 h-10 rounded-[50%] lg:w-auto mr-2"
                  alt=""
                />
                <strong className="font-semibold text-sm">{user.name}</strong>
              </div>

              <div className="w-60 absolute top-[60px] left-[-120px]">
                <ul className="w-[100%] flex flex-col justify-center items-center">
                  <li className="mt-3 flex justify-between items-center w-[70%]">
                    <Car />
                    <Link href="/" className="lg:w-auto px-3 py-2 rounded">
                      <a className="font-bold text-zinc-100 text-sm">
                        Venda seu carro
                      </a>
                    </Link>
                  </li>
                  <li className="mt-3 flex justify-between w-[70%]">
                    <SoccerBall />
                    <Link
                      href="/"
                      className="lg:w-auto px-3 py-2 rounded cente"
                    >
                      <a className="font-bold text-zinc-100 text-sm ">
                        Meus anuncios
                      </a>
                    </Link>
                  </li>
                  <li className="mt-3 flex justify-between w-[70%]">
                    <PencilSimple />
                    <Link href="/" className="lg:w-auto px-3 py-2 rounded">
                      <a className="font-bold text-zinc-100 text-sm">
                        Minha conta
                      </a>
                    </Link>
                  </li>
                  <li className="mt-3 flex justify-between w-[70%]">
                    <SignOut />
                    <Link href="/" className="lg:w-auto px-3 py-2 rounded">
                      <a className="font-bold text-zinc-100 text-sm">Sair</a>
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
