import { ReactNode } from 'react'

interface SocialNetworkButtonProps {
  logo: ReactNode;
  text: string;
  bgColor: string
  bgColorHover: string
  textColor?: string
}

export function SocialNetworkButton({ logo, bgColor, bgColorHover, text, textColor }: SocialNetworkButtonProps) {
  return (
    <button className={`w-full h-10 rounded-lg text-xs font-medium p-2 flex items-center ${bgColor} ${bgColorHover} transition-colors justify-start mb-4`}>
      {logo}
      <p className={`mr-15 font-medium flex-grow ${textColor}`}>{text}</p>
    </button>
  )
}
