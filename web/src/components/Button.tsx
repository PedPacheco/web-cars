import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  lgwidth: string
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full h-14 px-3 py-4 font-bold rounded-lg flex items-center justify-center bg-brand-primary transition-colors hover:bg-brand-hover  ${props.lgwidth} lg:h-10`}
    />
  )
}
