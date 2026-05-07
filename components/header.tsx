"use client"

import { motion } from "framer-motion"
import { Logo } from "./logo"
import { MagneticLink } from "./animations/magnetic-button"

export function Header() {
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/docs", label: "Documentation" },
  ]

  return (
    <motion.header 
      className="w-full py-6 px-6 md:px-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1 }}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Logo />
        </motion.div>
        
        <div className="flex items-center gap-8">
          {navItems.map((item, i) => (
            <MagneticLink
              key={item.href}
              href={item.href}
              className="text-sm text-ink/60 hover:text-ink transition-colors duration-300"
              strength={0.15}
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 100, 
                  delay: 0.2 + i * 0.1 
                }}
              >
                {item.label}
              </motion.span>
            </MagneticLink>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
