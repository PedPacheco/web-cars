import Link from 'next/link'

interface ListItemProps {
  text: string;
  url: string;
  icon?: React.ReactNode;
}

export function ListItem({ text, url, icon }: ListItemProps) {
  return (
    <li className="mt-3 md:mt-0 lg:flex-row md:ml-auto md:flex">
      <Link href={url}>
        <a className="font-bold text-zinc-100 text-center text-sm md:w-auto px-3 py-2 rounded flex flex-col items-center">
          {icon}
          <p className="hidden md:block">{text}</p>
        </a>
      </Link>
    </li>
  )
}
