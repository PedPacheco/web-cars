import Link from 'next/link'

interface ListItemProps {
  text: string
  url: string
  icon?: React.ReactNode
}

export function ListItemForModal({ text, url, icon }: ListItemProps) {
  return (
    <li>
      <Link href={url}>
        <a className="h-12 w-full flex items-center cursor-pointer text-zinc-100 pr-5 pl-4">
          {icon}
          {text}
        </a>
      </Link>
    </li>
  )
}
