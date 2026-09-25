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
        <section className="border-b border-[#E2DFD5] bg-[#F8F6F0] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
              Execution Track Record
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-balance font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-[#111111]"
            >
              Selected engagements. Tangible outcomes.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#3B4048] sm:text-xl">
              We measure our reputation by the practical impact of our work — from rapid talent deployment and memorable employee experiences to precision-engineered workspace climate infrastructure.
            </Reveal>
          </div>
        </section>

        {/* Interactive Case Studies Feed */}
        <WorkClient />

        {/* Work Page Consultation CTA */}
        <section className="border-t border-[#E2DFD5] bg-[#EFECE4] py-20 text-center">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <h3 className="font-serif text-3xl font-normal text-[#111111] sm:text-4xl">
              Have a similar engagement to execute?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-[#4B515D]">
              Contact our team with your specifications for a structured consultation and proposal.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#2A2A2A] cursor-pointer"
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
