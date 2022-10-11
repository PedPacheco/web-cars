interface InputProps {
  text: string
}

export function Input({ text }: InputProps) {
  return (
    <div className="w-full mb-6">
      <label className="text-lg mb-1 text-zinc-400">{text}</label>
      <input
        type="text"
        className="w-full h-9 text-base border-b border-zinc-400 border-solid bg-transparent outline-0 focus:border-zinc-200 transition-colors"
      />
    </div>
  )
}
