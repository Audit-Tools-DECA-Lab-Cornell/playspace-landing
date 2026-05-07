"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/logo"
import { TextReveal } from "@/components/animations/text-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/scroll-section"
import { TiltCard } from "@/components/animations/hover-card"

type Role = "manager" | "auditor" | "researcher" | null
type Step = "role" | "details" | "welcome"

export default function SignUpPage() {
  const [step, setStep] = useState<Step>("role")
  const [selectedRole, setSelectedRole] = useState<Role>(null)
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    institution: "",
  })

  const roles = [
    {
      id: "manager" as const,
      title: "Manager",
      description: "Coordinate audits, manage teams, and produce reports for your organization.",
      icon: "◇",
    },
    {
      id: "auditor" as const,
      title: "Auditor",
      description: "Conduct field observations of playspaces using the PVUA instrument.",
      icon: "○",
    },
    {
      id: "researcher" as const,
      title: "Researcher",
      description: "Access methodological documentation and contribute to ongoing research.",
      icon: "◈",
    },
  ]

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role)
    setStep("details")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("welcome")
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
          >
            <Logo />
          </motion.div>
        </div>
      </header>

      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-2xl mx-auto pt-12 md:pt-20">
          <AnimatePresence mode="wait">
            {/* Step 1: Role Selection */}
            {step === "role" && (
              <motion.div
                key="role"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", damping: 25, stiffness: 100 }}
              >
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-16 text-center overflow-hidden">
                  <TextReveal delay={0.2}>
                    Joining as a manager, an auditor, or a researcher?
                  </TextReveal>
                </h1>
                
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {roles.map((role) => (
                    <StaggerItem key={role.id}>
                      <TiltCard tiltStrength={4}>
                        <motion.button
                          onClick={() => handleRoleSelect(role.id)}
                          className="group w-full p-6 md:p-8 text-left border border-ink/10 hover:border-terracotta/50 transition-all bg-white/30 hover:bg-white/60"
                          whileHover={{ x: 8 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <div className="flex items-start gap-4">
                            <motion.span 
                              className="text-2xl text-terracotta mt-1"
                              whileHover={{ scale: 1.2, rotate: 90 }}
                              transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                              {role.icon}
                            </motion.span>
                            <div>
                              <h2 className="font-serif text-xl md:text-2xl text-ink mb-2 group-hover:text-terracotta transition-colors">
                                {role.title}
                              </h2>
                              <p className="text-ink/60 leading-relaxed">{role.description}</p>
                            </div>
                          </div>
                          <motion.div 
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-ink/30 group-hover:text-terracotta transition-colors"
                            initial={{ x: 0, opacity: 0 }}
                            whileHover={{ x: 4, opacity: 1 }}
                          >
                            →
                          </motion.div>
                        </motion.button>
                      </TiltCard>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            )}

            {/* Step 2: Details Form */}
            {step === "details" && (
              <motion.div
                key="details"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", damping: 25, stiffness: 100 }}
              >
                <motion.button
                  onClick={() => setStep("role")}
                  className="text-sm text-ink/60 hover:text-ink mb-8 flex items-center gap-2 transition-colors group"
                  whileHover={{ x: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.span
                    animate={{ x: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    ←
                  </motion.span>
                  <span>Back to role selection</span>
                </motion.button>

                <h1 className="font-serif text-3xl md:text-4xl text-ink mb-4 overflow-hidden">
                  <TextReveal>Your details</TextReveal>
                </h1>
                <FadeIn delay={0.3}>
                  <p className="text-ink/60 mb-12">
                    Joining as {selectedRole === "manager" ? "a manager" : selectedRole === "auditor" ? "an auditor" : "a researcher"}.
                  </p>
                </FadeIn>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <FadeIn delay={0.4}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink mb-3">
                        Email address
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-4 bg-white/50 border border-ink/10 text-ink placeholder:text-ink/30 focus:outline-none focus:border-terracotta focus:bg-white transition-all"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.5}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink mb-3">
                        Name
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-4 bg-white/50 border border-ink/10 text-ink placeholder:text-ink/30 focus:outline-none focus:border-terracotta focus:bg-white transition-all"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.6}>
                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-ink mb-3">
                        Institution <span className="text-ink/40">(optional)</span>
                      </label>
                      <motion.input
                        type="text"
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-4 py-4 bg-white/50 border border-ink/10 text-ink placeholder:text-ink/30 focus:outline-none focus:border-terracotta focus:bg-white transition-all"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.7} className="pt-4">
                    <MagneticButton
                      className="group relative w-full px-8 py-5 bg-terracotta text-cream font-medium text-lg overflow-hidden"
                      strength={0.15}
                    >
                      <span className="relative z-10">Continue</span>
                      <motion.div 
                        className="absolute inset-0 bg-ink"
                        initial={{ y: "100%" }}
                        whileHover={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      />
                    </MagneticButton>
                  </FadeIn>
                </form>
              </motion.div>
            )}

            {/* Step 3: Welcome */}
            {step === "welcome" && (
              <motion.div
                key="welcome"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ type: "spring", damping: 25, stiffness: 100 }}
                className="text-center pt-12"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-8 rounded-full bg-moss/20 flex items-center justify-center"
                >
                  <motion.span 
                    className="text-3xl text-moss"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    ✓
                  </motion.span>
                </motion.div>

                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink mb-8 overflow-hidden">
                  <TextReveal delay={0.3}>
                    Welcome to the network of practitioners.
                  </TextReveal>
                </h1>
                
                <FadeIn delay={0.6}>
                  <p className="text-lg text-ink/60 leading-relaxed mb-12 max-w-md mx-auto">
                    You have joined a community of researchers, managers, and auditors working 
                    to understand and improve the places where children play.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.8}>
                  <Link href="/dashboard">
                    <MagneticButton
                      className="group relative inline-flex items-center gap-3 px-10 py-5 bg-ink text-cream font-medium text-lg overflow-hidden"
                      strength={0.3}
                    >
                      <span className="relative z-10">Enter</span>
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
                        className="absolute inset-0 bg-terracotta"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      />
                    </MagneticButton>
                  </Link>
                </FadeIn>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
