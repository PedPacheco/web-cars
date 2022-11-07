interface VehiclePhotoProps {
  imageUrl: string
  bgSize: string
}

export function VehiclePhoto({ imageUrl, bgSize }: VehiclePhotoProps) {
  return (
    <div className="w-[140px] h-44 mx-2">
      <div
        className={`w-[140px] h-[140px] relative rounded cursor-pointer  bg-white bg-no-repeat ${
          bgSize === '80%' ? 'bg-center-top' : 'bg-center-top-45'
        } bg-[length:${bgSize}]`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <input
          type="file"
          className="w-full h-full absolute top-0 left-0 z-[-1]"
        />
        <span className="w-full text-center absolute bottom-6 text-base text-zinc-700 leading-[100%]">
          Adicionar
        </span>
      </div>
    </div>
  )
}
