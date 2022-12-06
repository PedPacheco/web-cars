import { InputHTMLAttributes } from 'react'

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
}

export function InputLogin({ text, ...props }: InputLoginProps) {
  return (
    <div className="mb-8">
      <div className="relative rounded-lg h-14 mt-3 lg:h-12">
        <input
          {...props}
          className="w-full h-10 py-3 pr-11 pl-4 rounded-lg border-2 border-zinc-400 bg-zinc-800"
        />
        <label
          htmlFor={text}
          className="absolute left-3 top-[-6px] px-2 text-zinc-400 text-xs bg-zinc-800"
        >
          {text}
        </label>
      </div>
    </div>
  )
}
