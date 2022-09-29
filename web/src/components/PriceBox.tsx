import Link from 'next/link'

interface PriceBoxProps {
  text: string;
}

export function PriceBox({ text }: PriceBoxProps) {
  return (
    <div className="max-w-[83.333333%] md:max-w-[25%] w-full px-4 pb-6 md:px-2 lg:px-4 text-center md:pb-0">
      <div className="px-12 py-6 md:px-0 md:py-12 lg:p-12 border border-[#8257E5] border-solid">
        <Link href="" className="cursor-pointer ">
          <a className="hover:underline underline-offset-4 decoration-[#8257E5]">
            <p className="text-[#8257E5] text-xl">
              Até <span className="font-semibold"> {text}</span>
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}
