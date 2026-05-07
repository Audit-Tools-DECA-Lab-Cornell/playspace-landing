import Link from "next/link"
import { Header } from "@/components/header"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="pt-16 md:pt-24 pb-20">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-8">
              For evaluating outdoor playspaces.
            </h1>
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-ink/80 mb-4">
                COPA — the Comprehensive Outdoor Playspace Audit Tool — is an instrument 
                for the careful field observation of children&apos;s outdoor playspaces. It 
                implements the Play Value and Usability Audit (PVUA) instrument, developed 
                through peer-reviewed research by an international team of occupational 
                therapists, environmental psychologists, and play scholars.
              </p>
            </div>
          </section>

          {/* The Work Section */}
          <section className="py-16 border-t border-ink/10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
              The work
            </h2>
            <div className="max-w-2xl space-y-4 text-ink/80 leading-relaxed">
              <p>
                An audit takes about an hour. Most of it is walking and looking, not 
                entering data.
              </p>
              <p>
                The instrument has 37 items across 5 domains, completed on a phone or 
                tablet, in any condition of network connectivity. You walk through the 
                site. You observe. You record what you see, structured by an instrument 
                that has been refined through years of fieldwork.
              </p>
              <p>
                When you submit, your observations become a structured report. Your work 
                contributes to research that will, eventually, shape decisions about what 
                kinds of places children are given to play in.
              </p>
            </div>
          </section>

          {/* About the Instrument Section */}
          <section className="py-16 border-t border-ink/10">
            <h2 className="font-serif text-2xl md:text-3xl text-ink mb-8">
              About the instrument
            </h2>
            <div className="max-w-2xl space-y-4 text-ink/80 leading-relaxed">
              <p>
                The Play Value and Usability Audit (PVUA) instrument was developed by 
                Morgenthaler, Loebach, Lynch, Pentland, Kottorp, and Schulze through a 
                collaboration between researchers at Cornell University, University College 
                Cork, and Karolinska Institutet.
              </p>
              <p>
                The instrument emerged from a systematic literature review, expert panel 
                consensus, and years of field testing across sites in Ireland, Sweden, and 
                the United States.
              </p>
              <p className="font-mono text-sm text-ink/60 pl-4 border-l-2 border-ink/10">
                Morgenthaler, T. et al. (2024). Using the theory of affordance to understand 
                environment–play transactions. <em>American Journal of Occupational Therapy</em>.
              </p>
            </div>
          </section>

          {/* Personas Section */}
          <section className="py-16 border-t border-ink/10">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-serif text-xl text-ink mb-3">For researchers</h3>
                <p className="text-ink/70 leading-relaxed">
                  Methodologically rigorous data collection grounded in published research. 
                  The instrument has a clear citation trail and documented validity.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-ink mb-3">For managers</h3>
                <p className="text-ink/70 leading-relaxed">
                  Coordinate audits across your team. Produce credible reports for 
                  municipalities, park departments, and funders.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-ink mb-3">For auditors</h3>
                <p className="text-ink/70 leading-relaxed">
                  A tool that treats you as a professional doing skilled work. Walk 
                  through the site, observe carefully, record what you see.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
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
