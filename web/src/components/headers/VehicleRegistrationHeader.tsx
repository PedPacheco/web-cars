import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { ArrowLeft } from 'phosphor-react'
import { Step } from '../Step'

export function VehicleRegistratonHeader() {
  function returnForPreviousPage() {
    Router.back()
  }

  return (
    <header className="w-full flex border-b border-zinc-700 bg-zinc-800">
      <div className=" w-[calc(100%-40px)] xl:w-[1280px] mx-auto relative flex items-center flex-wrap justify-center">
        <h1 className="w-auto h-16 flex items-center">
          <Link
            href={{
              pathname: '/',
            }}
            className="w-auto h-6"
          >
            <a>
              <Image
                src={
                  'https://theme.zdassets.com/theme_assets/9588016/cc14d7ac81c746f8b560135fb73ee3f1eca56a54.png'
                }
                alt="Imagem do logo"
                width={124}
                height={24}
              />
            </a>
          </Link>
        </h1>

        <div className="w-full lg:w-[1170px] mx-auto relative">
          <button
            className="block md:hidden absolute top-5"
            onClick={returnForPreviousPage}
          >
            <ArrowLeft size={20} />
          </button>
          <div className="w-72 flex mx-auto mb-6 justify-between ">
            <Step text="Veículo" step="1" />
            <Step text="Sobre você" step="2" />
            <Step text="Finalizar" step="3" isLast={true} />
          </div>
        </div>
      </div>
    </header>
  )
}
