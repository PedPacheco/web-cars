import { Select } from './Select'

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
          <Select size="big" text="Marca" mdMaxWidth="50%" />
          <Select size="big" text="Modelo" mdMaxWidth="50%" />
          <Select size="small" text="Ano" mdMaxWidth="33.333333%" />
          <Select size="small" text="Versão" mdMaxWidth="33.333333%" />
          <Select size="small" text="KM rodados" mdMaxWidth="33.333333%" />
        </div>

        <div></div>
      </div>
    </section>
  )
}
