import { Button } from '../Atoms/Button'
import { SelectComponent } from '../Atoms/SelectComponent'

export function HomeSearchBox() {
  return (
    <section className="my-5 py-16">
      <form className="w-full px-4 md:max-w-3xl lg:max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="max-w-[80%] w-full px-4 text-center lg:max-w-full">
            <p className="py-4 mb-6 text-3xl font-light text-zinc-100 md:mb-0 md:text-5xl">
              BUSQUE AGORA <span className="font-bold">SEU CARRO</span>
            </p>
          </div>
          <SelectComponent
            mdMaxWidth="md:max-w-[25%]"
            maxWidth="max-w-[80%]"
            text="Marca"
          />
          <SelectComponent
            mdMaxWidth="md:max-w-[25%]"
            maxWidth="max-w-[80%]"
            text="Modelo"
          />
          <SelectComponent
            maxWidth="max-w-[41%]"
            mdMaxWidth="md:max-w-[25%]"
            text="Preço de:"
          />
          <SelectComponent
            maxWidth="max-w-[41%]"
            mdMaxWidth="md:max-w-[25%]"
            text="Preço até:"
          />

          <div className="max-w-[80%] w-full px-4 md:max-w-[50%]">
            <Button lgwidth="w-full">Buscar</Button>
          </div>
        </div>
      </form>
    </section>
  )
}
