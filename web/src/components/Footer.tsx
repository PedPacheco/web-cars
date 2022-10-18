import Link from 'next/link'
import { Copyright, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="w-full absolute bottom-0 bg-zinc-800">
      <div className="flex justify-between items-center w-[calc(100%-40px)] min-h-[70px] mx-auto">
        <span className="flex items-center">
          <Copyright weight="bold" className="mr-1" />
          10/2022-Até acaba Pedro Pacheco. Todos os direitos resevardos.
        </span>
        <nav>
          <ul className="flex min-h-[70px] items-center">
            <li className="w-full mx-3">
              <Link href="https://www.linkedin.com/in/pedro-henrique-da-silva-pacheco-302013208/">
                <a>
                  <LinkedinLogo size={40} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/">
                <a>
                  <InstagramLogo size={40} />
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
