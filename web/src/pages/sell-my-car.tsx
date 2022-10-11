import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import { Header } from '~/components/Header'
import { SellYourVehicle } from '~/components/SellYourVehicle/SellYourVehicle'

export default function SellMyCar() {
  const router = useRouter()
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
    </>
  )
}
