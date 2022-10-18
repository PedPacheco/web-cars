import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SellYourVehicle } from '~/components/SellYourVehicle/SellYourVehicle'

export default function SellMyCar() {
  const router = useRouter()
  const [step, setStep] = useState<string>('')
  const [vehicleData, setVehicleData] = useState({
    brand: null,
    model: null,
    modelYear: null,
    yearOfManufacture: null,
    version: null,
    color: null,
    kmDriven: null,
    description: null,
    price: null,
  })
  const { token } = parseCookies()

  useEffect(() => {
    if (token === '') {
      router.push('/login')
    }
  }, [token, router])

  return (
    <>
      <Header />
      <SellYourVehicle />
      <Footer />
    </>
  )
}
