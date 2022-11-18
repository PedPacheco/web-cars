import { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  sizetext: string
  padding: string
  fieldname: string
  rules?: object
  register: UseFormRegister<FieldValues>
}

export function Input({
  fieldname,
  padding,
  register,
  sizetext,
  text,
  rules,
  ...props
}: InputProps) {
  return (
    <div className={`w-full mb-6 ${padding}`}>
      <label className={`${sizetext} mb-1 text-zinc-400`}>{text}</label>
      <input
        type="text"
        {...register(fieldname, { ...rules })}
        className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors disabled:opacity-50"
        {...props}
      />
    </div>
  )
}
