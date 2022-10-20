import { useRouter } from 'next/router'
import { VehicleRegistratonHeader } from '~/components/VehicleRegistrationHeader'

export default function Informations() {
  const { query } = useRouter()
  const data = query

  console.log(data)
  return (
    <>
      <VehicleRegistratonHeader />
      <div>
        <h1>Hello world</h1>
      </div>
    </>
  )
}
