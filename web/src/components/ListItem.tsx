import Link from 'next/link'

interface ListItemProps {
  text: string
  url: string
}

export function ListItem({ text, url }: ListItemProps) {
  return (
    <li className="mt-3 lg:mt-0 lg:flex-row lg:ml-auto">
      <Link href={url} className="lg:w-auto px-3 py-2 rounded">
        <a className="font-bold text-zinc-100 text-sm">{text}</a>
      </Link>
    </li>
  )
}
