import { Heart, Bell, Chats, Car, Bicycle } from "phosphor-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-auto justify-between items-center sticky top-0 px-4 h-16 bg-zinc-800">
      <div className="w-[160px] h-7">
        <Link href="">
          <img
            src="https://theme.zdassets.com/theme_assets/9588016/cc14d7ac81c746f8b560135fb73ee3f1eca56a54.png"
            alt="Logotipo"
          />
        </Link>
      </div>

      <nav>
        <ul className="flex items-center">
          <li className="h-16 text-sm mr-6 py-[26px] px-[16px] text-zinc-100 cursor-default relative group">
            Comprar
            <div className="invisible flex justify-between w-[420px] absolute top-[60px] left-0 px-2 py-3 bg-zinc-800 group-hover:visible">
              <div>
                <strong className="flex items-center font-semibold text-zinc-300 mb-4 ">
                  <Car size={24} className="mr-2" /> Buscar Carros
                </strong>
                <ul>
                  <li className="mb-4">
                    <Link href="">Carros usados ou seminovos</Link>
                  </li>
                  <li>
                    <Link href="">Carros novos</Link>
                  </li>
                </ul>
              </div>
              <div>
                <strong className="flex items-center font-semibold text-zinc-300 mb-4">
                  <Bicycle size={24} className="mr-2" /> Buscar Motos
                </strong>
                <ul>
                  <li className="mb-4">
                    <Link href="">Motos usados ou seminovos</Link>
                  </li>
                  <li>
                    <Link href="">Motos novos</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="h-16 text-sm mr-6 py-[26px] px-[16px] text-zinc-100 relative cursor-default group">
            Vender
            <div className="invisible w-60 absolute top-[60px] left-0 bg-zinc-800 flex items-center justify-center pt-3 group-hover:visible">
              <ul>
                <li className="flex items-center font-semibold text-zinc-300 mb-4 ">
                  <Car size={24} className="mr-2" />
                  Vender meu veículo
                </li>
                <li className="flex items-center font-semibold text-zinc-300 mb-4 ">
                  <Bicycle size={24} className="mr-2" />
                  Vender minha moto
                </li>
              </ul>
            </div>
          </li>

          <li className="h-16 text-sm mr-6 py-[26px] px-[16px] text-zinc-100 cursor-pointer">
            Entrar
          </li>

          <li className="h-16  mr-6 py-[26px] px-[16px] text-zinc-100 cursor-pointer">
            <Heart size={24} />
          </li>

          <li className="h-16 mr-6 py-[26px] px-[16px] text-zinc-100 cursor-pointer">
            <Chats size={24} />
          </li>

          <li className="h-16  mr-6 py-[26px] px-[16px] text-zinc-100 cursor-pointer">
            <Bell size={24} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
