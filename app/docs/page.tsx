"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Logo } from "@/components/logo"
import { TextReveal } from "@/components/animations/text-reveal"
import { MagneticLink } from "@/components/animations/magnetic-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/scroll-section"
import { ScrollProgress, AnimatedLine } from "@/components/animations/scroll-progress"

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
    <div className="min-h-screen bg-cream overflow-hidden">
      <ScrollProgress />
      
      {/* Header */}
      <motion.header 
        className="w-full py-6 px-6 md:px-12 border-b border-ink/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 100 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <Logo />
          </motion.div>
          <div className="flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ].map((item, i) => (
              <MagneticLink
                key={item.href}
                href={item.href}
                className="text-sm text-ink/60 hover:text-ink transition-colors duration-300"
                strength={0.15}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  {item.label}
                </motion.span>
              </MagneticLink>
            ))}
          </div>
        </div>
      </motion.header>

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden md:block w-64 shrink-0 py-12 pr-8 border-r border-ink/10">
            <nav className="sticky top-12">
              <StaggerContainer className="space-y-8" staggerDelay={0.1}>
                {sections.map((section) => (
                  <StaggerItem key={section.id}>
                    <div>
                      <h3 className="font-medium text-ink text-sm mb-3">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.id}>
                            <motion.div
                              whileHover={{ x: 4 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                              <Link
                                href={`/docs/${item.id}`}
                                className={`text-sm block py-1 transition-colors ${
                                  activeSection === item.id
                                    ? "text-terracotta"
                                    : "text-ink/50 hover:text-ink"
                                }`}
                              >
                                {item.title}
                              </Link>
                            </motion.div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 py-12 md:pl-12 max-w-3xl">
            {/* Breadcrumb */}
            <FadeIn>
              <div className="text-sm text-ink/40 mb-8 flex items-center gap-2">
                <span>Documentation</span>
                <span className="text-ink/20">/</span>
                <span>Getting started</span>
                <span className="text-ink/20">/</span>
                <span className="text-ink/70">Introduction</span>
              </div>
            </FadeIn>

            {/* Content */}
            <article>
              <h1 className="font-serif text-4xl md:text-5xl text-ink mb-10 overflow-hidden">
                <TextReveal delay={0.1}>Introduction</TextReveal>
              </h1>

              <FadeIn delay={0.3}>
                <p className="text-lg text-ink/70 leading-relaxed mb-6">
                  COPA — the Comprehensive Outdoor Playspace Audit Tool — is software for 
                  conducting structured field observations of children&apos;s outdoor playspaces. 
                  It implements the Play Value and Usability Audit (PVUA) instrument, a 
                  peer-reviewed measure developed by an international research team.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-lg text-ink/70 leading-relaxed mb-12">
                  This documentation covers everything you need to know to use COPA effectively, 
                  whether you are an auditor walking through a site, a manager coordinating a 
                  team, or a researcher interested in the methodology.
                </p>
              </FadeIn>

              <AnimatedLine className="my-12" />

              <FadeIn delay={0.2}>
                <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
                  <TextReveal>What COPA does</TextReveal>
                </h2>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-lg text-ink/70 leading-relaxed mb-8">
                  COPA provides a structured way to observe and record what a playspace 
                  actually offers. The instrument has 37 items across 5 domains:
                </p>
              </FadeIn>

              <StaggerContainer className="space-y-4 mb-12" staggerDelay={0.1}>
                {[
                  { title: "Physical Features", desc: "The equipment, surfaces, and structures present in the space." },
                  { title: "Sensory Richness", desc: "The variety of textures, sounds, colors, and materials available." },
                  { title: "Play Affordances", desc: "The opportunities for different types of play the environment supports." },
                  { title: "Social Opportunity", desc: "How the space facilitates interaction, privacy, and gathering." },
                  { title: "Accessibility", desc: "How usable the space is for children with diverse abilities." },
                ].map((item) => (
                  <StaggerItem key={item.title}>
                    <motion.div 
                      className="flex gap-4 p-4 bg-white/30 border border-ink/5 hover:border-terracotta/30 hover:bg-white/60 transition-all"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className="w-2 h-2 rounded-full bg-terracotta mt-2 shrink-0" />
                      <div>
                        <strong className="text-ink">{item.title}</strong>
                        <span className="text-ink/60"> — {item.desc}</span>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <AnimatedLine className="my-12" />

              <FadeIn>
                <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
                  <TextReveal>How an audit works</TextReveal>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-lg text-ink/70 leading-relaxed mb-6">
                  An audit takes about an hour. Most of that time is spent walking and looking, 
                  not entering data.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg text-ink/70 leading-relaxed mb-6">
                  You open COPA on a phone or tablet. You select the site you have been 
                  assigned. You walk through the space, observing each domain in turn. For 
                  each item, you record what you see — not what you assume, not what the site 
                  plan claims, but what is actually present.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-lg text-ink/70 leading-relaxed mb-8">
                  The app works offline. If you lose connectivity in the field, your work is 
                  saved locally and will sync when you return to a network.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <motion.div 
                  className="bg-white/40 border border-ink/10 p-8 mt-8"
                  whileHover={{ borderColor: "rgba(176, 106, 58, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-serif text-lg text-ink mb-6">Notes from experienced auditors</h3>
                  <div className="space-y-6 text-ink/60">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <p className="leading-relaxed">
                        &quot;I always do a full lap of the site before I start recording anything. 
                        It helps me understand the whole space before I focus on the details.&quot;
                      </p>
                      <span className="block mt-2 text-sm text-ink/40">— Janet, Ithaca team</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <p className="leading-relaxed">
                        &quot;Bring a portable battery. The app works offline, but the phone still 
                        drains.&quot;
                      </p>
                      <span className="block mt-2 text-sm text-ink/40">— Marcus, Cork team</span>
                    </motion.div>
                  </div>
                </motion.div>
              </FadeIn>

              <AnimatedLine className="my-12" />

              <FadeIn>
                <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
                  <TextReveal>Next steps</TextReveal>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-lg text-ink/70 leading-relaxed mb-8">
                  If you are new to COPA, we recommend reading through the following guides 
                  in order:
                </p>
              </FadeIn>

              <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
                {[
                  { num: "01", href: "/docs/your-first-audit", title: "Your first audit", desc: "A walkthrough of the audit process" },
                  { num: "02", href: "/docs/understanding-the-instrument", title: "Understanding the instrument", desc: "The methodology behind the PVUA" },
                  { num: "03", href: "/docs/five-domains", title: "The five domains", desc: "Detailed explanation of each assessment area" },
                ].map((item) => (
                  <StaggerItem key={item.num}>
                    <Link href={item.href}>
                      <motion.div 
                        className="flex items-center gap-6 p-4 border border-ink/5 hover:border-terracotta/30 hover:bg-white/60 transition-all group"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="font-mono text-sm text-ink/30 group-hover:text-terracotta transition-colors">{item.num}</span>
                        <div className="flex-1">
                          <span className="text-terracotta group-hover:underline">{item.title}</span>
                          <span className="text-ink/50"> — {item.desc}</span>
                        </div>
                        <motion.span 
                          className="text-ink/30 group-hover:text-terracotta transition-colors"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </article>

            {/* Pagination */}
            <FadeIn delay={0.2}>
              <div className="mt-16 pt-8 border-t border-ink/10 flex justify-end">
                <Link href="/docs/your-first-audit">
                  <motion.div 
                    className="flex items-center gap-2 text-terracotta hover:underline group"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span>Your first audit</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </Link>
              </div>
            </FadeIn>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-ink/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <motion.span 
                className="font-serif italic text-xl text-ink"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                COPA<span className="text-terracotta">.</span>
              </motion.span>
              <div className="flex gap-8 text-sm text-ink/50">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <MagneticLink 
                    key={link.href}
                    href={link.href}
                    className="hover:text-ink transition-colors duration-300"
                    strength={0.15}
                  >
                    {link.label}
                  </MagneticLink>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </footer>
    </div>
  )
}
