import Link from "next/link"
import { Header } from "@/components/header"

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
  { name: "Cork, Ireland", coords: { x: 28, y: 35 } },
  { name: "Stockholm, Sweden", coords: { x: 52, y: 28 } },
  { name: "Ithaca, USA", coords: { x: 22, y: 38 } },
  { name: "Zurich, Switzerland", coords: { x: 48, y: 36 } },
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
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <section className="pt-16 md:pt-24 pb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6">
              About the instrument
            </h1>
            <p className="text-lg text-ink/70 max-w-2xl">
              The story of the PVUA instrument and the research team behind it.
            </p>
          </section>

          {/* Origin Story */}
          <section className="py-12 border-t border-ink/10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
              The instrument&apos;s origin
            </h2>
            <div className="max-w-2xl space-y-4 text-ink/80 leading-relaxed">
              <p>
                The Play Value and Usability Audit began as a question: how do we 
                systematically observe what a playspace actually offers children? Not what 
                the designer intended, not what the marketing materials claim, but what a 
                trained observer can see when they walk through.
              </p>
              <p>
                The collaboration brought together researchers from Cornell University in 
                the United States, University College Cork in Ireland, and Karolinska 
                Institutet in Sweden. Each brought a different lens — occupational therapy, 
                environmental psychology, play studies — but shared a commitment to 
                methodological rigor.
              </p>
              <p>
                The development process began with a systematic literature review, 
                identifying existing measures of play value and their limitations. An expert 
                panel refined the domains and items. Years of field testing across diverse 
                sites in three countries shaped the final instrument: 37 items across 5 
                domains, each with clear observational criteria.
              </p>
              <p>
                The PVUA is not a checklist. It is a structured observation protocol that 
                asks the auditor to look carefully, to notice what is present and what is 
                absent, to consider how the environment might be read by children with 
                different abilities, ages, and interests.
              </p>
            </div>
          </section>

          {/* The Team */}
          <section className="py-12 border-t border-ink/10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
              The team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {researchers.map((person) => (
                <div key={person.name} className="space-y-1">
                  <h3 className="font-medium text-ink">{person.name}</h3>
                  <p className="text-sm text-ink/60">{person.role}</p>
                  <p className="text-sm text-ink/60">
                    {person.institution} · {person.discipline}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Field Sites Map */}
          <section className="py-12 border-t border-ink/10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
              The fieldwork
            </h2>
            <p className="text-ink/80 leading-relaxed mb-8 max-w-2xl">
              The instrument has been tested and refined across sites in four countries, 
              each contributing to the validity and reliability of the final measure.
            </p>
            
            {/* Simple text-based site list */}
            <div className="bg-secondary/50 p-8 space-y-4">
              {fieldSites.map((site) => (
                <div key={site.name} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-terracotta" />
                  <span className="text-ink/80">{site.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="py-12 border-t border-ink/10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
              Publications
            </h2>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div 
                  key={index} 
                  className="pl-6 border-l-2 border-ink/10 text-ink/70 leading-relaxed"
                >
                  <p>
                    {pub.authors} ({pub.year}). {pub.title}. <em>{pub.journal}</em>, {pub.volume}.
                    {pub.doi && (
                      <span className="font-mono text-sm block mt-1 text-ink/50">
                        doi:{pub.doi}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Ongoing Development */}
          <section className="py-12 border-t border-ink/10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
              Where it goes from here
            </h2>
            <p className="text-ink/80 leading-relaxed max-w-2xl">
              The instrument continues to be refined. The software is in active development. 
              We are working on translations into French and Mandarin. Field reports continue 
              to inform iteration. The work of observing playspaces carefully is ongoing, 
              and the tools that support that work must grow with it.
            </p>
          </section>

          {/* CTA */}
          <section className="py-16 border-t border-ink/10">
            <div className="text-center">
              <Link
                href="/signup"
                className="inline-block px-8 py-4 bg-terracotta text-cream font-medium text-lg hover:bg-terracotta/90 transition-colors"
              >
                Begin
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-16 border-t border-ink/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <span className="font-serif italic text-xl text-ink">
                COPA<span className="text-terracotta">.</span>
              </span>
              <div className="flex gap-8 text-sm text-ink/60">
                <Link href="/about" className="hover:text-ink transition-colors">
                  About
                </Link>
                <Link href="/docs" className="hover:text-ink transition-colors">
                  Documentation
                </Link>
                <Link href="/contact" className="hover:text-ink transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
