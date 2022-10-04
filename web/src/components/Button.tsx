interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  lgWidth: string;
  text: string;
}

export function Button({ type, text, lgWidth }: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-full h-14 px-3 py-4 font-bold rounded-lg flex items-center justify-center bg-brand-primary transition-colors hover:bg-brand-hover  ${lgWidth} lg:h-10`}
    >
      {text}
    </button>
  )
}
