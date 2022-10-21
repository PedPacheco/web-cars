interface StepProps {
  text: string
  step: string
  isLast?: boolean
}

export function Step({ text, step, isLast }: StepProps) {
  return (
    <div className="w-[68px] relative">
      {isLast ? (
        <>
          <span className="w-[52px] h-[52px] mx-auto rounded-[26px] block text-xl leading-[52px] text-center text-zinc-400 relative z-0">
            <span className="w-7 h-7 absolute bg-zinc-100 rounded-2xl top-3 left-3 -z-[1]">
              &nbsp;
            </span>
            {step}
            <span className="w-10 h-10 absolute rounded-3xl block -z-[2] top-[6px] left-[6px] bg-zinc-500">
              &nbsp;
            </span>
          </span>
          <span className="font-medium text-center text-xs text-zinc-100 block">
            {text}
          </span>
        </>
      ) : (
        <>
          <span className="w-[52px] h-[52px] mx-auto rounded-[26px] block text-xl leading-[52px] text-center text-zinc-400 relative z-0">
            <span className="w-7 h-7 absolute bg-zinc-100 rounded-2xl top-3 left-3 -z-[1]">
              &nbsp;
            </span>
            {step}
            <span className="w-10 h-10 absolute rounded-3xl block -z-[2] top-[6px] left-[6px] bg-zinc-500">
              &nbsp;
            </span>
          </span>
          <span className="w-20 h-[1px] absolute top-6 left-12 z-[1] bg-zinc-500">
            &nbsp;
          </span>
          <span className="font-medium text-center text-xs text-zinc-100 block">
            {text}
          </span>
        </>
      )}
    </div>
  )
}
