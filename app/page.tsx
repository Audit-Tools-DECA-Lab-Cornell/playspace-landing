"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { TextReveal } from "@/components/animations/text-reveal"
import { MagneticButton, MagneticLink } from "@/components/animations/magnetic-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/scroll-section"
import { CursorParallax, DepthLayer } from "@/components/animations/parallax"
import { TiltCard } from "@/components/animations/hover-card"
import { ScrollProgress, AnimatedLine } from "@/components/animations/scroll-progress"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      <ScrollProgress />
      <Header />
      
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section with Parallax Depth */}
          <section className="pt-20 md:pt-32 pb-32 relative">
            {/* Background decorative elements */}
            <DepthLayer depth={0.3} className="absolute top-20 right-0 opacity-[0.03] pointer-events-none">
              <div className="w-96 h-96 rounded-full border-[40px] border-ink" />
            </DepthLayer>
            <DepthLayer depth={0.5} className="absolute -bottom-20 -left-20 opacity-[0.02] pointer-events-none">
              <div className="w-64 h-64 rounded-full border-[30px] border-terracotta" />
            </DepthLayer>
            
            <CursorParallax strength={0.01}>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ink leading-[1.1] mb-10 overflow-hidden">
                <TextReveal delay={0.2}>
                  For evaluating outdoor playspaces.
                </TextReveal>
              </h1>
            </CursorParallax>
            
            <FadeIn delay={0.6} className="max-w-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-ink/70">
                COPA — the Comprehensive Outdoor Playspace Audit Tool — is an instrument 
                for the careful field observation of children&apos;s outdoor playspaces.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.8} className="mt-12">
              <MagneticButton
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ink text-cream font-medium text-lg overflow-hidden"
                strength={0.25}
              >
                <span className="relative z-10">Begin an audit</span>
                <motion.span 
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  →
                </motion.span>
                <motion.div 
                  className="absolute inset-0 bg-terracotta"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
              </MagneticButton>
            </FadeIn>
          </section>

          <AnimatedLine />

          {/* Stats Section */}
          <section className="py-20 md:py-28">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { number: "37", label: "audit items" },
                { number: "5", label: "domains" },
                { number: "~1hr", label: "per audit" },
                { number: "3", label: "countries" },
              ].map((stat, i) => (
                <StaggerItem key={i}>
                  <div className="text-center">
                    <motion.span 
                      className="block font-serif text-4xl md:text-5xl lg:text-6xl text-ink"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring", damping: 25 }}
                    >
                      {stat.number}
                    </motion.span>
                    <span className="text-sm md:text-base text-ink/50 mt-2 block">{stat.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          <AnimatedLine />

          {/* The Work Section */}
          <section className="py-20 md:py-28">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-12">
                <TextReveal>The work</TextReveal>
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <FadeIn delay={0.1}>
                <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
                  <p>
                    An audit takes about an hour. Most of it is walking and looking, not 
                    entering data.
                  </p>
                  <p>
                    The instrument has 37 items across 5 domains, completed on a phone or 
                    tablet, in any condition of network connectivity.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
                  <p>
                    You walk through the site. You observe. You record what you see, 
                    structured by an instrument refined through years of fieldwork.
                  </p>
                  <p>
                    When you submit, your observations become a structured report that 
                    contributes to research shaping where children play.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          <AnimatedLine />

          {/* About the Instrument Section */}
          <section className="py-20 md:py-28">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
              <div className="lg:col-span-2">
                <FadeIn>
                  <h2 className="font-serif text-3xl md:text-4xl text-ink mb-6 sticky top-24">
                    <TextReveal>About the instrument</TextReveal>
                  </h2>
                </FadeIn>
              </div>
              
              <div className="lg:col-span-3 space-y-8">
                <FadeIn>
                  <p className="text-lg leading-relaxed text-ink/70">
                    The Play Value and Usability Audit (PVUA) instrument was developed by 
                    Morgenthaler, Loebach, Lynch, Pentland, Kottorp, and Schulze through a 
                    collaboration between researchers at Cornell University, University College 
                    Cork, and Karolinska Institutet.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <p className="text-lg leading-relaxed text-ink/70">
                    The instrument emerged from a systematic literature review, expert panel 
                    consensus, and years of field testing across sites in Ireland, Sweden, and 
                    the United States.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                  <motion.blockquote 
                    className="font-mono text-sm text-ink/50 pl-6 border-l-2 border-terracotta/30"
                    whileHover={{ x: 4, borderColor: "rgba(176, 106, 58, 0.6)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Morgenthaler, T. et al. (2024). Using the theory of affordance to understand 
                    environment–play transactions. <em>American Journal of Occupational Therapy</em>.
                  </motion.blockquote>
                </FadeIn>
              </div>
            </div>
          </section>

          <AnimatedLine />

          {/* Personas Section with Tilt Cards */}
          <section className="py-20 md:py-28">
            <FadeIn className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-ink">
                <TextReveal>Who it&apos;s for</TextReveal>
              </h2>
            </FadeIn>
            
            <StaggerContainer 
              className="grid md:grid-cols-3 gap-6 md:gap-8"
              staggerDelay={0.15}
            >
              {[
                {
                  title: "For researchers",
                  description: "Methodologically rigorous data collection grounded in published research. The instrument has a clear citation trail and documented validity.",
                  icon: "◈"
                },
                {
                  title: "For managers",
                  description: "Coordinate audits across your team. Produce credible reports for municipalities, park departments, and funders.",
                  icon: "◇"
                },
                {
                  title: "For auditors",
                  description: "A tool that treats you as a professional doing skilled work. Walk through the site, observe carefully, record what you see.",
                  icon: "○"
                },
              ].map((persona, i) => (
                <StaggerItem key={i}>
                  <TiltCard 
                    className="group h-full p-8 md:p-10 bg-white/50 border border-ink/5 hover:border-ink/10 hover:bg-white/80 transition-colors cursor-default"
                    tiltStrength={8}
                  >
                    <motion.span 
                      className="text-3xl text-terracotta block mb-6"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      {persona.icon}
                    </motion.span>
                    <h3 className="font-serif text-xl md:text-2xl text-ink mb-4">
                      {persona.title}
                    </h3>
                    <p className="text-ink/60 leading-relaxed">
                      {persona.description}
                    </p>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          <AnimatedLine />

          {/* CTA Section */}
          <section className="py-24 md:py-32">
            <div className="text-center">
              <FadeIn>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mb-6">
                  <TextReveal>Ready to begin?</TextReveal>
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg text-ink/60 mb-12 max-w-md mx-auto">
                  Join the network of practitioners contributing to playspace research.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.3}>
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
