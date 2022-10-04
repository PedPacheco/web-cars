import { SelectComponent } from './SelectComponent'

export function SellYourVehicle() {
  return (
    <section className="bg-zinc-800">
      <div className="w-full px-4 mx-auto md:max-w-3xl lg:max-w-5xl">
        <div className="flex flex-wrap justify-center text-center">
          <div className="max-w-[83%] w-full py-4 text-2xl">
            <p>
              VENDA SEU <strong>CARRO</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center pb-4">
          <SelectComponent
            text="Marca"
            mdMaxWidth="md:max-w-[50%]"
            maxWidth="md:max-w-[80%]"
          />
          <SelectComponent
            text="Modelo"
            mdMaxWidth="md:max-w-[50%]"
            maxWidth="md:max-w-[80%]"
          />
          <SelectComponent
            text="Ano"
            mdMaxWidth="md:max-w-[33.333333%]"
            maxWidth="md:max-w-[80%]"
          />
          <SelectComponent
            text="Versão"
            mdMaxWidth="md:max-w-[33.333333%]"
            maxWidth="md:max-w-[80%]"
          />
          <SelectComponent
            text="KM rodados"
            mdMaxWidth="md:max-w-[33.333333%]"
            maxWidth="md:max-w-[80%]"
          />
        </div>

        <div></div>
      </div>
    </section>
  )
}
