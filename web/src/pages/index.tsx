import { Header } from '~/components/Header'
import { HomeSearchBox } from '~/components/HomeSearchBox'
import { SellYourVehicle } from '~/components/SellYourVehicle'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HomeSearchBox />
        <SellYourVehicle />
      </main>
    </>
  )
}
