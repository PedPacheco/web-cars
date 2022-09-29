import { Header } from '~/components/Header'
import { HomeSearchBox } from '~/components/HomeSearchBox'
import { PriceRange } from '~/components/PriceRange'
import { SellYourVehicle } from '~/components/SellYourVehicle'
import * as Separator from '@radix-ui/react-separator'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeSearchBox />
        <SellYourVehicle />
        <section>
          <div className="w-full px-4 mx-auto md:max-w-[720px] lg:max-w-5xl">
            <div className="flex justify-center">
              <div className="max-w-[50%] w-full p-4">
                <Separator.Root className="my-4 border border-solid border-zinc-700" />
              </div>
            </div>
          </div>
        </section>

        <PriceRange />
      </main>
    </>
  )
}
