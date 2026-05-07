"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { TextReveal } from "@/components/animations/text-reveal"
import { MagneticButton, MagneticLink } from "@/components/animations/magnetic-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/scroll-section"
import { TiltCard } from "@/components/animations/hover-card"
import { ScrollProgress, AnimatedLine } from "@/components/animations/scroll-progress"

const researchers = [
  {
    name: "Dr. Tara Morgenthaler",
    role: "Principal Investigator",
    institution: "Cornell University",
    discipline: "Occupational Therapy",
  },
  {
    name: "Dr. Janet Loebach",
    role: "Co-Investigator",
    institution: "Cornell University",
    discipline: "Environmental Psychology",
  },
  {
    name: "Dr. Heather Lynch",
    role: "Co-Investigator",
    institution: "University College Cork",
    discipline: "Occupational Science",
  },
  {
    name: "Dr. Wendy Pentland",
    role: "Co-Investigator",
    institution: "Queen's University",
    discipline: "Occupational Therapy",
  },
  {
    name: "Dr. Anders Kottorp",
    role: "Co-Investigator",
    institution: "Karolinska Institutet",
    discipline: "Occupational Therapy",
  },
  {
    name: "Dr. Christina Schulze",
    role: "Co-Investigator",
    institution: "ZHAW Zurich",
    discipline: "Occupational Science",
  },
]

const fieldSites = [
  { name: "Cork, Ireland", flag: "IE" },
  { name: "Stockholm, Sweden", flag: "SE" },
  { name: "Ithaca, USA", flag: "US" },
  { name: "Zurich, Switzerland", flag: "CH" },
]

const publications = [
  {
    authors: "Morgenthaler, T., Loebach, J., Lynch, H., Pentland, W., Kottorp, A., & Schulze, C.",
    year: "2024",
    title: "Using the theory of affordance to understand environment–play transactions",
    journal: "American Journal of Occupational Therapy",
    volume: "78(2)",
    doi: "10.5014/ajot.2024.050125",
  },
  {
    authors: "Lynch, H., Moore, A., Edwards, C., & Lawlor, L.",
    year: "2020",
    title: "Advancing play participation for all: The challenge of addressing play diversity through Universal Design for Learning",
    journal: "British Journal of Occupational Therapy",
    volume: "83(2), 107–118",
    doi: "10.1177/0308022619881936",
  },
  {
    authors: "Loebach, J., & Gilliland, J.",
    year: "2022",
    title: "Examining the contribution of neighbourhood environmental characteristics to children's outdoor play and physical activity",
    journal: "Urban Studies",
    volume: "59(1), 186–205",
    doi: "10.1177/00420980211014455",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      <ScrollProgress />
      <Header />
      
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <section className="pt-20 md:pt-32 pb-20">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-ink leading-tight mb-8 overflow-hidden">
              <TextReveal delay={0.2}>
                About the instrument
              </TextReveal>
            </h1>
            <FadeIn delay={0.5}>
              <p className="text-xl text-ink/60 max-w-2xl">
                The story of the PVUA instrument and the research team behind it.
              </p>
            </FadeIn>
          </section>

          <AnimatedLine />

          {/* Origin Story */}
          <section className="py-20 md:py-28">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              <div className="lg:col-span-2">
                <FadeIn>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 sticky top-24">
                    <TextReveal>The instrument&apos;s origin</TextReveal>
                  </h2>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-3 space-y-6">
                <FadeIn>
                  <p className="text-lg leading-relaxed text-ink/70">
                    The Play Value and Usability Audit began as a question: how do we 
                    systematically observe what a playspace actually offers children? Not what 
                    the designer intended, not what the marketing materials claim, but what a 
                    trained observer can see when they walk through.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <p className="text-lg leading-relaxed text-ink/70">
                    The collaboration brought together researchers from Cornell University in 
                    the United States, University College Cork in Ireland, and Karolinska 
                    Institutet in Sweden. Each brought a different lens — occupational therapy, 
                    environmental psychology, play studies — but shared a commitment to 
                    methodological rigor.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <p className="text-lg leading-relaxed text-ink/70">
                    The development process began with a systematic literature review, 
                    identifying existing measures of play value and their limitations. An expert 
                    panel refined the domains and items. Years of field testing across diverse 
                    sites in three countries shaped the final instrument: 37 items across 5 
                    domains, each with clear observational criteria.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <motion.p 
                    className="text-lg leading-relaxed text-ink/70 pl-6 border-l-2 border-terracotta/30"
                    whileHover={{ x: 4, borderColor: "rgba(176, 106, 58, 0.6)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    The PVUA is not a checklist. It is a structured observation protocol that 
                    asks the auditor to look carefully, to notice what is present and what is 
                    absent, to consider how the environment might be read by children with 
                    different abilities, ages, and interests.
                  </motion.p>
                </FadeIn>
              </div>
            </div>
          </section>

          <AnimatedLine />

          {/* The Team */}
          <section className="py-20 md:py-28">
            <FadeIn className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-ink">
                <TextReveal>The team</TextReveal>
              </h2>
            </FadeIn>
            
            <StaggerContainer 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.1}
            >
              {researchers.map((person) => (
                <StaggerItem key={person.name}>
                  <TiltCard 
                    className="group h-full p-6 md:p-8 bg-white/30 border border-ink/5 hover:border-ink/10 hover:bg-white/60 transition-colors"
                    tiltStrength={6}
                  >
                    <h3 className="font-medium text-ink mb-2">{person.name}</h3>
                    <p className="text-sm text-terracotta mb-3">{person.role}</p>
                    <p className="text-sm text-ink/50">
                      {person.institution}
                    </p>
                    <p className="text-sm text-ink/40">
                      {person.discipline}
                    </p>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          <AnimatedLine />

          {/* Field Sites */}
          <section className="py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <FadeIn>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6">
                    <TextReveal>The fieldwork</TextReveal>
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-lg text-ink/70 leading-relaxed">
                    The instrument has been tested and refined across sites in four countries, 
                    each contributing to the validity and reliability of the final measure.
                  </p>
                </FadeIn>
              </div>
              
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {fieldSites.map((site) => (
                  <StaggerItem key={site.name}>
                    <motion.div 
                      className="flex items-center gap-4 p-4 bg-white/30 border border-ink/5 hover:border-terracotta/30 hover:bg-white/60 transition-all cursor-default"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className="w-3 h-3 rounded-full bg-terracotta" />
                      <span className="text-ink/80 text-lg">{site.name}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          <AnimatedLine />

          {/* Publications */}
          <section className="py-20 md:py-28">
            <FadeIn className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-ink">
                <TextReveal>Publications</TextReveal>
              </h2>
            </FadeIn>
            
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <motion.div 
                    className="pl-6 border-l-2 border-ink/10 hover:border-terracotta/50 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <p className="text-ink/70 leading-relaxed">
                      {pub.authors} ({pub.year}). <span className="text-ink">{pub.title}</span>. <em>{pub.journal}</em>, {pub.volume}.
                    </p>
                    {pub.doi && (
                      <motion.span 
                        className="font-mono text-xs block mt-2 text-ink/40 hover:text-terracotta transition-colors cursor-pointer"
                        whileHover={{ x: 2 }}
                      >
                        doi:{pub.doi}
                      </motion.span>
                    )}
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </section>

          <AnimatedLine />

          {/* Ongoing Development */}
          <section className="py-20 md:py-28">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              <div className="lg:col-span-2">
                <FadeIn>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink sticky top-24">
                    <TextReveal>Where it goes from here</TextReveal>
                  </h2>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-3">
                <FadeIn>
                  <p className="text-lg text-ink/70 leading-relaxed">
                    The instrument continues to be refined. The software is in active development. 
                    We are working on translations into French and Mandarin. Field reports continue 
                    to inform iteration. The work of observing playspaces carefully is ongoing, 
                    and the tools that support that work must grow with it.
                  </p>
                </FadeIn>
              </div>
            </div>
          </section>

          <AnimatedLine />

          {/* CTA */}
          <section className="py-24 md:py-32">
            <div className="text-center">
              <FadeIn>
                <h2 className="font-serif text-4xl md:text-5xl text-ink mb-12">
                  <TextReveal>Ready to contribute?</TextReveal>
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <Link href="/signup">
                  <MagneticButton
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-terracotta text-cream font-medium text-lg overflow-hidden"
                    strength={0.3}
                  >
                    <span className="relative z-10">Begin</span>
                    <motion.span 
                      className="relative z-10 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 bg-ink"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                  </MagneticButton>
                </Link>
              </FadeIn>
            </div>
          </section>

          <AnimatedLine />

          {/* Footer */}
          <footer className="py-16">
            <FadeIn>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <motion.span 
                  className="font-serif italic text-2xl text-ink"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  COPA<span className="text-terracotta">.</span>
                </motion.span>
                
                <nav className="flex flex-wrap gap-8 text-sm text-ink/50">
                  {[
                    { href: "/about", label: "About" },
                    { href: "/docs", label: "Documentation" },
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
                </nav>
              </div>
            </FadeIn>
          </footer>
        </div>
      </main>
    </div>
  )
}
