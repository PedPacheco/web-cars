import * as Separator from '@radix-ui/react-separator'
import { Header } from '~/components/Header'
import { HomeSearchBox } from '~/components/HomeSearchBox'
import { PriceBox } from '~/components/PriceBox'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeSearchBox />
        <section>
          <div className="w-full px-4 mx-auto md:max-w-[720px] lg:max-w-5xl">
            <div className="flex justify-center">
              <div className="max-w-[50%] w-full p-4">
                <Separator.Root className="my-4 border border-solid border-zinc-700" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-4">
          <div className="w-full px-4 mx-auto md:max-w-[720px] lg:max-w-5xl">
            <div className="flex flex-wrap justify-center mt-6 mb-2 text-2xl md:text-3xl">
              <p>
                POR FAIXA DE <span className="font-semibold">PREÇO</span>
              </p>
            </div>

            <div className="flex flex-wrap justify-center py-6 mx-[-15px] mb-6">
              <PriceBox text="R$20.000,00" />
              <PriceBox text="R$35.000,00" />
              <PriceBox text="R$50.000,00" />
              <PriceBox text="R$80.000,00" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
