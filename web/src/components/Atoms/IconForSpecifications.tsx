import { ReactNode } from 'react'

interface IconForSpecificationsProps {
  icon: ReactNode
  text: string
}

export function IconForSpecifications({
  icon,
  text,
}: IconForSpecificationsProps) {
  return (
    <div className="w-full max-w-[100px] max-h-[65px] text-center border border-zinc-500 border-solid m-2 p-2 rounded-lg">
      <p className="mb-1 text-center">{icon}</p>
      <p>{text}</p>
    </div>
  )
}
