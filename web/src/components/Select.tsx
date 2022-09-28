interface SelectProps {
  size: string;
  text: string;
  mdMaxWidth: string;
}

export function Select({ size, text, mdMaxWidth }: SelectProps) {
  return (
    <>
      {size === 'big' ? (
        <div className={`max-w-[80%] w-full px-4 md:max-w-[${mdMaxWidth}]`}>
          <label className="inline-block mb-2">{text}</label>
          <select className="w-full h-10 py-[0.375rem] pr-7 pl-3 mb-4 text-base text-zinc-400 rounded">
            <option value="">BMW</option>
          </select>
        </div>
      ) : (
        <div className={`max-w-[80%] w-full px-4 md:max-w-[${mdMaxWidth}]`}>
          <label className="inline-block mb-2">{text}</label>
          <select className="w-full h-10 py-[0.375rem] pr-7 pl-3 text-base text-zinc-400 rounded">
            <option value="">22.000</option>
          </select>
        </div>
      )}
    </>
  )
}
