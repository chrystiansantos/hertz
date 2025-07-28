import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto mt-8 flex max-w-[1200px] items-center justify-between px-16">
      <span className="text-2xl font-semibold">Fixpro</span>
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link className="px-3 py-1 text-sm" href="/service">
              Serviços
            </Link>
          </li>
          <li>
            <Link
              className="rounded-full bg-yellow-400 px-3 py-1 text-sm text-white"
              href="/contact"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
