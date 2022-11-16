import { MagnifyingGlassPlus, X } from 'phosphor-react'
import { InputHTMLAttributes, useEffect, useState } from 'react'

interface VehiclePhotoProps extends InputHTMLAttributes<HTMLInputElement> {
  imageUrl: string
  id?: string
  handleRemovePhoto: (publicId: string) => void
}

export function VehiclePhoto({
  imageUrl,
  id,
  handleRemovePhoto,
  ...props
}: VehiclePhotoProps) {
  const defaultUrl =
    'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
  const [publicId, setPublicId] = useState<string | undefined>('')

  useEffect(() => {
    if (!id) {
      return
    }
    setPublicId(id)
  }, [id])

  return (
    <div className="w-[140px] h-44 mx-2">
      {imageUrl !== defaultUrl ? (
        <div
          className="w-[140px] h-[140px] relative rounded cursor-pointer bg-white bg-no-repeat bg-center-top bg-[length:140px_140px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
          id={publicId}
        >
          <input
            type="file"
            className="w-full h-full absolute top-0 left-0 z-[1] opacity-[0.01]"
            {...props}
            disabled={imageUrl !== defaultUrl}
          />
          <div className="w-17 flex justify-center absolute bottom-3 left-[50%] ml-[-34px] z-10">
            <button className="w-8 h-8 rounded-full cursor-pointer bg-white flex justify-center items-center">
              <MagnifyingGlassPlus size={24} color="black" />
            </button>
            <button
              className="w-8 h-8 rounded-full cursor-pointer flex justify-center items-center bg-white ml-2"
              onClick={() => {
                if (publicId) {
                  handleRemovePhoto(publicId)
                }
              }}
            >
              <X size={24} color="red" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="w-[140px] h-[140px] relative rounded cursor-pointer bg-white bg-no-repeat bg-center-top-45 bg-[length:44px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <input
            type="file"
            className="w-full h-full absolute top-0 left-0 z-[1] opacity-[0.01]"
            {...props}
          />
          <span className="w-full text-center absolute bottom-6 text-base text-zinc-700 leading-[100%]">
            Adicionar
          </span>
        </div>
      )}
    </div>
  )
}
