import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Header } from '~/components/Header'
import { SellYourVehicle } from '~/components/SellYourVehicle'
import UseAuth from '~/hooks/useAuth'

export default function SellMyCar() {
  const { isAuthenticated } = UseAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push('/login')
      return
    }
  }, [])

  return (
    <>
      <Header />
      <SellYourVehicle />
    </>
  )
}
