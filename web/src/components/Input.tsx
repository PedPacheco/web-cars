interface InputProps {
  text: string;
}

export function Input({ text }: InputProps) {
  return (
    <div className="mb-8">
      <div className="relative rounded-lg h-14 mt-3 lg:h-12">
        <input
          id={text}
          className="w-full h-full py-3 pr-11 pl-4 rounded-lg border-2 border-zinc-400 bg-zinc-800"
        />
        <label
          htmlFor={text}
          className="absolute left-3 top-[-12px] px-2 text-zinc-400 text-base bg-zinc-800"
        >
          {text}
        </label>
      </div>
    </div>
  )
}
