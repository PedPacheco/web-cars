import { HeaderMyGabage } from '~/components/HeaderMyGabage'
import { InformationUser } from '~/components/InformationsUser'

export default function Perfil() {
  return (
    <div>
      <HeaderMyGabage />
      <div className="flex items-stretch justify-start">
        <InformationUser />
      </div>
    </div>
  )
}
