"use client"

import { useState } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"

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
    },
    {
      id: "auditor" as const,
      title: "Auditor",
      description: "Conduct field observations of playspaces using the PVUA instrument.",
    },
    {
      id: "researcher" as const,
      title: "Researcher",
      description: "Access methodological documentation and contribute to ongoing research.",
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

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Logo />
        </div>
      </header>

      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-2xl mx-auto pt-12 md:pt-20">
          {/* Step 1: Role Selection */}
          {step === "role" && (
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-ink mb-12 text-center">
                Joining as a manager, an auditor, or a researcher?
              </h1>
              
              <div className="space-y-4">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className="w-full p-6 text-left border border-ink/10 hover:border-terracotta/50 transition-colors bg-cream"
                  >
                    <h2 className="font-serif text-xl text-ink mb-2">{role.title}</h2>
                    <p className="text-ink/60 leading-relaxed">{role.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Details Form */}
          {step === "details" && (
            <div>
              <button
                onClick={() => setStep("role")}
                className="text-sm text-ink/60 hover:text-ink mb-8 flex items-center gap-2 transition-colors"
              >
                <span>←</span>
                <span>Back to role selection</span>
              </button>

              <h1 className="font-serif text-3xl md:text-4xl text-ink mb-4">
                Your details
              </h1>
              <p className="text-ink/60 mb-12">
                Joining as {selectedRole === "manager" ? "a manager" : selectedRole === "auditor" ? "an auditor" : "a researcher"}.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-ink/20 text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-ink/20 text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-ink mb-2">
                    Institution <span className="text-ink/40">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="institution"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-4 py-3 bg-cream border border-ink/20 text-ink placeholder:text-ink/40 focus:outline-none focus:border-terracotta"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-terracotta text-cream font-medium text-lg hover:bg-terracotta/90 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 3: Welcome */}
          {step === "welcome" && (
            <div className="text-center pt-12">
              <h1 className="font-serif text-3xl md:text-4xl text-ink mb-6">
                Welcome to the network of practitioners.
              </h1>
              <p className="text-ink/70 leading-relaxed mb-12 max-w-md mx-auto">
                You have joined a community of researchers, managers, and auditors working 
                to understand and improve the places where children play.
              </p>
              
              <Link
                href="/dashboard"
                className="inline-block px-8 py-4 bg-terracotta text-cream font-medium text-lg hover:bg-terracotta/90 transition-colors"
              >
                Enter
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
