import { Photos } from '~/pages/vender-carro/fotos'
import { VehiclePhoto } from '../Molecules/VehiclePhoto'

interface FieldAddPhotoProps {
  photos: Photos[]
  handleAddPhoto: (file: File) => Promise<void>
  handleRemovePhoto: (publicId: string) => Promise<void>
}

export function FieldAddPhoto({
  photos,
  handleAddPhoto,
  handleRemovePhoto,
}: FieldAddPhotoProps) {
  return (
    <div className="w-full flex flex-wrap justify-center overflow-hidden">
      <VehiclePhoto
        imageUrl={
          photos[0]
            ? photos[0].url
            : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
        }
        onChange={(event) => {
          const file = (event.target as HTMLInputElement).files![0]
          if (!file) {
            return
          }
          handleAddPhoto(file)
        }}
        id={photos[0]?.publicId !== '' ? photos[0]?.publicId : ''}
        handleRemovePhoto={handleRemovePhoto}
      />
      <VehiclePhoto
        imageUrl={
          photos[1]
            ? photos[1].url
            : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
        }
        onChange={(event) => {
          const file = (event.target as HTMLInputElement).files![0]
          if (!file) {
            return
          }
          handleAddPhoto(file)
        }}
        id={photos[1]?.publicId !== '' ? photos[1]?.publicId : ''}
        handleRemovePhoto={handleRemovePhoto}
      />
      <VehiclePhoto
        imageUrl={
          photos[2]
            ? photos[2].url
            : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
        }
        onChange={(event) => {
          const file = (event.target as HTMLInputElement).files![0]
          if (!file) {
            return
          }
          handleAddPhoto(file)
        }}
        id={photos[2]?.publicId !== '' ? photos[2]?.publicId : ''}
        handleRemovePhoto={handleRemovePhoto}
      />
      <VehiclePhoto
        imageUrl={
          photos[3]
            ? photos[3].url
            : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
        }
        onChange={(event) => {
          const file = (event.target as HTMLInputElement).files![0]
          if (!file) {
            return
          }
          handleAddPhoto(file)
        }}
        id={photos[3]?.publicId !== '' ? photos[3]?.publicId : ''}
        handleRemovePhoto={handleRemovePhoto}
      />
      <VehiclePhoto
        imageUrl={
          photos[4]
            ? photos[4].url
            : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
        }
        onChange={(event) => {
          const file = (event.target as HTMLInputElement).files![0]
          if (!file) {
            return
          }
          handleAddPhoto(file)
        }}
        id={photos[4]?.publicId !== '' ? photos[4]?.publicId : ''}
        handleRemovePhoto={handleRemovePhoto}
      />
      <VehiclePhoto
        imageUrl={
          photos[5]
            ? photos[5].url
            : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
        }
        onChange={(event) => {
          const file = (event.target as HTMLInputElement).files![0]
          if (!file) {
            return
          }
          handleAddPhoto(file)
        }}
        id={photos[5]?.publicId !== '' ? photos[5]?.publicId : ''}
        handleRemovePhoto={handleRemovePhoto}
      />
      <VehiclePhoto
        imageUrl={
          photos[6]
            ? photos[6].url
            : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
        }
        onChange={(event) => {
          const file = (event.target as HTMLInputElement).files![0]
          if (!file) {
            return
          }
          handleAddPhoto(file)
        }}
        id={photos[6]?.publicId !== '' ? photos[6]?.publicId : ''}
        handleRemovePhoto={handleRemovePhoto}
      />
      <VehiclePhoto
        imageUrl={
          photos[7]
            ? photos[7].url
            : 'https://www.webmotors.com.br/vender/img/icons/vehicle-positions/icon-carro-position-default.svg'
        }
        onChange={(event) => {
          const file = (event.target as HTMLInputElement).files![0]
          if (!file) {
            return
          }
          handleAddPhoto(file)
        }}
        id={photos[7]?.publicId !== '' ? photos[7]?.publicId : ''}
        handleRemovePhoto={handleRemovePhoto}
      />
    </div>
  )
}
