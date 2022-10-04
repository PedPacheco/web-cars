import Image from 'next/image'
import Link from 'next/link'
import { List } from 'phosphor-react'
import { useState } from 'react'
import { ListItem } from './ListItem'

export function Header() {
  const [open, setOpen] = useState(false)

  function showOptions() {
    setOpen(!open)
  }

  return (
    <header className="sticky z-10 w-full top-0 px-4 min-h-[76px] bg-[#8257E5]">
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
          } flex-col w-full lg:w-[480px] lg:flex-row pl-3 lg:flex`}
        >
          <ListItem url="/" text="Home" />
          <ListItem url="/" text="Estoque" />
          <ListItem url="/" text="Venda seu carro" />
          <ListItem url="/" text="Contato" />
          <ListItem url="/login" text="Login" />
        </ul>
      </nav>
    </header>
  )
}
