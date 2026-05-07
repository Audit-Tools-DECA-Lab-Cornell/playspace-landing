import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <span className="font-serif italic text-2xl tracking-tight text-ink">
        COPA<span className="text-terracotta">.</span>
      </span>
    </Link>
  )
}
