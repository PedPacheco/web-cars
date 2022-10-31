import { HeaderMyGabage } from '~/components/HeaderMyGabage'
import { InformationUser } from '~/components/InformationsUser'
import { Input } from '~/components/Input'
import UseAuth from '~/hooks/useAuth'

export default function Perfil() {
  const { user } = UseAuth()
  return (
    <div>
      <HeaderMyGabage />
      <div className="flex items-stretch justify-start">
        <div className="hidden lg:block">
          <InformationUser />
        </div>
        <main className="w-full flex justify-start items-stretch overflow-hidden">
          <div className="w-full overflow-hidden">
            <div className="w-full h-60 bg-orange-500 lg:hidden">
              <div className="h-full overflow-visible relative w-[calc(100%-34px)] mx-auto">
                <div className="absolute bottom-4 left-0 text-xl">
                  {user?.name}
                </div>
              </div>
            </div>
            <div>
              <div className="w-full">
                <div>
                  <h1 className="text-lg font-semibold text-zinc-300 pt-7 pb-2 px-4 mb-4">
                    Dados Pessoais
                  </h1>
                  <Input
                    text="E-mail"
                    sizetext="text-sm"
                    padding="px-5"
                    disabled
                    value={user?.email}
                  />
                  <Input
                    text="Nome"
                    sizetext="text-sm"
                    padding="px-5"
                    disabled
                    value={user?.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
