"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "@/components/logo"

const sections = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      { id: "introduction", title: "Introduction" },
      { id: "your-first-audit", title: "Your first audit" },
      { id: "understanding-the-instrument", title: "Understanding the instrument" },
    ],
  },
  {
    id: "the-instrument",
    title: "The instrument",
    items: [
      { id: "five-domains", title: "The five domains" },
      { id: "scoring", title: "Scoring rubrics" },
      { id: "items", title: "All 37 items" },
    ],
  },
  {
    id: "for-auditors",
    title: "For auditors",
    items: [
      { id: "preparing", title: "Preparing for an audit" },
      { id: "in-the-field", title: "In the field" },
      { id: "offline-mode", title: "Working offline" },
      { id: "submitting", title: "Submitting your audit" },
    ],
  },
  {
    id: "for-managers",
    title: "For managers",
    items: [
      { id: "creating-places", title: "Creating places" },
      { id: "assigning-auditors", title: "Assigning auditors" },
      { id: "reports", title: "Understanding reports" },
    ],
  },
]

export default function DocsPage() {
  const [activeSection] = useState("introduction")

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 border-b border-ink/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm text-ink/60 hover:text-ink transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-ink/60 hover:text-ink transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden md:block w-64 shrink-0 py-12 pr-8 border-r border-ink/10">
            <nav className="sticky top-12 space-y-8">
              {sections.map((section) => (
                <div key={section.id}>
                  <h3 className="font-medium text-ink text-sm mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/docs/${item.id}`}
                          className={`text-sm block py-1 transition-colors ${
                            activeSection === item.id
                              ? "text-terracotta"
                              : "text-ink/60 hover:text-ink"
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-12 md:pl-12 max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-sm text-ink/50 mb-8">
              <span>Documentation</span>
              <span className="mx-2">/</span>
              <span>Getting started</span>
              <span className="mx-2">/</span>
              <span className="text-ink">Introduction</span>
            </div>

            {/* Content */}
            <article className="prose-copa">
              <h1 className="font-serif text-3xl md:text-4xl text-ink mb-8">
                Introduction
              </h1>

              <p className="text-ink/80 leading-relaxed mb-6">
                COPA — the Comprehensive Outdoor Playspace Audit Tool — is software for 
                conducting structured field observations of children&apos;s outdoor playspaces. 
                It implements the Play Value and Usability Audit (PVUA) instrument, a 
                peer-reviewed measure developed by an international research team.
              </p>

              <p className="text-ink/80 leading-relaxed mb-6">
                This documentation covers everything you need to know to use COPA effectively, 
                whether you are an auditor walking through a site, a manager coordinating a 
                team, or a researcher interested in the methodology.
              </p>

              <h2 className="font-serif text-2xl text-ink mt-12 mb-6">
                What COPA does
              </h2>

              <p className="text-ink/80 leading-relaxed mb-6">
                COPA provides a structured way to observe and record what a playspace 
                actually offers. The instrument has 37 items across 5 domains:
              </p>

              <ul className="space-y-3 mb-8 ml-6">
                <li className="text-ink/80 leading-relaxed">
                  <strong className="text-ink">Physical Features</strong> — The equipment, 
                  surfaces, and structures present in the space.
                </li>
                <li className="text-ink/80 leading-relaxed">
                  <strong className="text-ink">Sensory Richness</strong> — The variety of 
                  textures, sounds, colors, and materials available.
                </li>
                <li className="text-ink/80 leading-relaxed">
                  <strong className="text-ink">Play Affordances</strong> — The opportunities 
                  for different types of play the environment supports.
                </li>
                <li className="text-ink/80 leading-relaxed">
                  <strong className="text-ink">Social Opportunity</strong> — How the space 
                  facilitates interaction, privacy, and gathering.
                </li>
                <li className="text-ink/80 leading-relaxed">
                  <strong className="text-ink">Accessibility</strong> — How usable the space 
                  is for children with diverse abilities.
                </li>
              </ul>

              <h2 className="font-serif text-2xl text-ink mt-12 mb-6">
                How an audit works
              </h2>

              <p className="text-ink/80 leading-relaxed mb-6">
                An audit takes about an hour. Most of that time is spent walking and looking, 
                not entering data.
              </p>

              <p className="text-ink/80 leading-relaxed mb-6">
                You open COPA on a phone or tablet. You select the site you have been 
                assigned. You walk through the space, observing each domain in turn. For 
                each item, you record what you see — not what you assume, not what the site 
                plan claims, but what is actually present.
              </p>

              <p className="text-ink/80 leading-relaxed mb-6">
                The app works offline. If you lose connectivity in the field, your work is 
                saved locally and will sync when you return to a network.
              </p>

              <div className="bg-secondary/50 p-6 mt-8">
                <h3 className="font-medium text-ink mb-3">Notes from experienced auditors</h3>
                <div className="space-y-4 text-sm text-ink/70">
                  <p>
                    &quot;I always do a full lap of the site before I start recording anything. 
                    It helps me understand the whole space before I focus on the details.&quot;
                    <span className="block mt-1 text-ink/50">— Janet, Ithaca team</span>
                  </p>
                  <p>
                    &quot;Bring a portable battery. The app works offline, but the phone still 
                    drains.&quot;
                    <span className="block mt-1 text-ink/50">— Marcus, Cork team</span>
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-2xl text-ink mt-12 mb-6">
                Next steps
              </h2>

              <p className="text-ink/80 leading-relaxed mb-6">
                If you are new to COPA, we recommend reading through the following guides 
                in order:
              </p>

              <ol className="space-y-2 mb-8 ml-6 list-decimal list-outside">
                <li className="text-ink/80 leading-relaxed pl-2">
                  <Link href="/docs/your-first-audit" className="text-terracotta hover:underline">
                    Your first audit
                  </Link>
                  {" "}— A walkthrough of the audit process
                </li>
                <li className="text-ink/80 leading-relaxed pl-2">
                  <Link href="/docs/understanding-the-instrument" className="text-terracotta hover:underline">
                    Understanding the instrument
                  </Link>
                  {" "}— The methodology behind the PVUA
                </li>
                <li className="text-ink/80 leading-relaxed pl-2">
                  <Link href="/docs/five-domains" className="text-terracotta hover:underline">
                    The five domains
                  </Link>
                  {" "}— Detailed explanation of each assessment area
                </li>
              </ol>
            </article>

            {/* Pagination */}
            <div className="mt-16 pt-8 border-t border-ink/10 flex justify-end">
              <Link 
                href="/docs/your-first-audit"
                className="text-terracotta hover:underline flex items-center gap-2"
              >
                <span>Your first audit</span>
                <span>→</span>
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-ink/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <span className="font-serif italic text-xl text-ink">
              COPA<span className="text-terracotta">.</span>
            </span>
            <div className="flex gap-8 text-sm text-ink/60">
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-ink transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-ink transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
