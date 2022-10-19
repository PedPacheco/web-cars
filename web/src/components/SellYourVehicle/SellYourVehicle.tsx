import Router from 'next/router'
import { Input } from '../Input'

interface SellYourVehicleProps {
  changeStep: (step: string) => void
}

export function SellYourVehicle({ changeStep }: SellYourVehicleProps) {
  function returnForPreviousPage() {
    Router.back()
  }

  return (
    <section className="py-6 ">
      <div className="w-[calc(100%-34px)] px-4 mx-auto my-3 md:w-[480px]">
        <h1 className="text-3xl font-light text-center mb-6 text-zinc-400">
          Vamos começar o seu Anúncio?
        </h1>

        <div className="w-full md:w-96 mx-auto">
          <Input text="Marca" />
          <Input text="Modelo" />
          <div className="w-full mb-6 flex">
            <div className="w-[calc(50%-17px)] mr-8">
              <label className="text-lg mb-1 text-zinc-400">
                Ano do modelo
              </label>
              <input
                type="text"
                className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors"
              />
            </div>
            <div className="w-[calc(50%-17px)]">
              <label className="text-lg mb-1 text-zinc-400">
                Ano de fabricação
              </label>
              <input
                type="text"
                className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors"
              />
            </div>
          </div>
          <Input text="Versão" />
          <Input text="Cor" />
        </div>

        <div className="w-[calc(100%-34px)] mx-auto">
          <div className="fixed bottom-0 left-0 z-10 w-full flex md:w-[380px] md:mt-10 md:static md:mx-auto ">
            <button
              className="hidden w-full bg-zinc-400 flex-grow h-12 cursor-pointer text-lg border-none hover:bg-zinc-300 transition-colors md:block"
              onClick={returnForPreviousPage}
            >
              Voltar
            </button>
            <button
              className="w-full bg-brand-primary flex-grow h-12 cursor-pointer text-lg border-none hover:bg-brand-hover transition-colors md:ml-5"
              onClick={() => changeStep('step2')}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
