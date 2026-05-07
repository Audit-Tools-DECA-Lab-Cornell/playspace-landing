import Link from "next/link"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="w-full py-6 px-6 md:px-12">
      <nav className="max-w-4xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-8">
          <Link 
            href="/about" 
            className="text-sm text-ink/70 hover:text-ink transition-colors"
          >
            About
          </Link>
          <Link 
            href="/docs" 
            className="text-sm text-ink/70 hover:text-ink transition-colors"
          >
            Documentation
          </Link>
        </div>
      </nav>
    </header>
  )
}
