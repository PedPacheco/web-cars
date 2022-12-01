import { HeaderMyGabage } from '~/components/Molecules/HeaderMyGabage'
import { InformationUser } from '~/components/Molecules/InformationsUser'
import { UserInfo } from '~/components/Organisms/UserInfo'

export default function Perfil() {
  return (
    <div>
      <HeaderMyGabage />
      <div className="flex items-stretch justify-start">
        <div className="hidden lg:block">
          <InformationUser />
        </div>
        <main className="w-full flex justify-start items-stretch overflow-hidden">
          <UserInfo />
        </main>
      </div>
    </div>
  )
}
