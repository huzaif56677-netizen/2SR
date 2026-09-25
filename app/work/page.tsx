import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Reveal } from "@/components/site/reveal"
import { WorkClient } from "./work-client"

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Explore case studies and verified project outcomes delivered by 2SR Innovations across recruitment, corporate gifting, and HVAC/MEP engineering.",
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Page Hero */}
        <section className="border-b border-[#E2E8F0] bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
              <span>Execution Track Record</span>
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-balance font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-[#0A1128]"
            >
              Selected engagements. Tangible outcomes.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#334155] sm:text-xl">
              We measure our reputation by the practical impact of our work — from rapid talent deployment and memorable employee experiences to precision-engineered workspace climate infrastructure.
            </Reveal>
          </div>
        </section>

        {/* Interactive Case Studies Feed */}
        <WorkClient />

        {/* Work Page Consultation CTA */}
        <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-20 text-center">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <h3 className="font-serif text-3xl font-normal text-[#0A1128] sm:text-4xl">
              Have a similar engagement to execute?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-[#475569]">
              Contact our team with your specifications for a structured consultation and proposal.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0052CC] px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0052CC]/15 transition-all hover:bg-[#0043A8] hover:shadow-lg cursor-pointer"
              >
                <span>Initiate Briefing</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
