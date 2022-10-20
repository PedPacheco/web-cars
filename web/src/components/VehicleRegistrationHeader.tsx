import Image from 'next/image'
import Link from 'next/link'

export function VehicleRegistratonHeader() {
  return (
    <header className="w-full lg:w-[1170px] flex border-b border-zinc-700 bg-zinc-800">
      <div className="w-[calc(100%-40px)] mx-auto relative flex items-center flex-wrap justify-center">
        <h1 className="w-auto h-16 flex items-center">
          <Link
            href={{
              pathname: '/',
            }}
            className="w-auto h-6"
          >
            <a>
              <Image
                src={
                  'https://www.webmotors.com.br/vender/img/brands/brand-webmotors.svg'
                }
                alt="Imagem do logo"
                width={124}
                height={24}
              />
            </a>
          </Link>
        </h1>

        <div className="w-full mx-auto">
          <div className="w-72 flex mx-auto mb-6 justify-between ">
            <div className="w-16 relative"></div>
          </div>
        </div>
      </div>
    </header>
  )
}
