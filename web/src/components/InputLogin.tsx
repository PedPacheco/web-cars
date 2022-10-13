import { InputHTMLAttributes } from 'react'

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
}

export function InputLogin(props: InputLoginProps) {
  return (
    <div className="mb-8">
      <div className="relative rounded-lg h-14 mt-3 lg:h-12">
        <input
          {...props}
          className="w-full h-full py-3 pr-11 pl-4 rounded-lg border-2 border-zinc-400 bg-zinc-800"
        />
        <label
          htmlFor={props.text}
          className="absolute left-3 top-[-12px] px-2 text-zinc-400 text-base bg-zinc-800"
        >
          {props.text}
        </label>
      </div>
    </div>
  )
}
