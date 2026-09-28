import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Reveal, ScrollFocusCard } from "@/components/site/reveal"
import { ApproachFrameworkSection } from "@/components/site/approach-scroll-steps"
import { approach } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Our Approach & Methodology",
  description:
    "Explore the 5-stage disciplined methodology 2SR Innovations applies across recruitment, corporate gifting, and HVAC/MEP engineering.",
}

const executionPillars = [
  {
    num: "01",
    title: "Dedicated Single Point of Contact",
    desc: "Every project is led by a dedicated engagement manager who oversees cross-functional execution and maintains clear, direct accountability.",
  },
  {
    num: "02",
    title: "Transparent Milestones & SLAs",
    desc: "We establish measurable checkpoints and realistic delivery windows before kickoff — preventing scope creep and costly delays.",
  },
  {
    num: "03",
    title: "Rigorous Quality Verification",
    desc: "From pre-placement candidate assessments to thermal HVAC balancing and bespoke gift packaging inspections, our quality audits are exhaustive.",
  },
  {
    num: "04",
    title: "Post-Delivery Continuity",
    desc: "Delivery is never the end of our responsibility. We provide ongoing support, warranty backing, and relationship management long after handover.",
  },
]

export default function ApproachPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Page Hero */}
        <section className="border-b border-[#E2E8F0] bg-background pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pb-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 inline-flex items-center rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              <span>How We Work</span>
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-balance font-serif text-[clamp(2.1rem,6.5vw,4.8rem)] sm:text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.38] sm:leading-[1.32] tracking-tight text-[#0A1128]"
            >
              A calm, structured approach to every requirement.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#334155] sm:text-xl">
              We replace guesswork and fragmented coordination with a disciplined, five-stage delivery framework. Whether filling key executive positions, producing corporate gift collections, or engineering MEP systems, the methodology remains rock-solid.
            </Reveal>
          </div>
        </section>

        {/* 5 Stages Detail */}
        <section className="border-b border-[#CBD5E1] bg-background py-8 sm:py-10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <ApproachFrameworkSection steps={approach} />
          </div>
        </section>

        {/* Quality Assurance Principles */}
        <section className="bg-background py-8 sm:py-10">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0052CC]">
                Governance &amp; Assurance
              </span>
              <h2 className="mt-2 font-serif text-3xl font-normal text-[#0A1128] sm:text-4xl">
                The principles governing our delivery.
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {executionPillars.map((p, i) => (
                <ScrollFocusCard
                  key={p.num}
                  delay={i * 240}
                  className="rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-xs cursor-pointer"
                >
                  <span className="font-serif text-sm font-semibold text-[#0052CC]">{p.num}</span>
                  <h4 className="mt-2.5 font-serif text-xl font-normal text-[#0A1128]">{p.title}</h4>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-[#475569]">{p.desc}</p>
                </ScrollFocusCard>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center sm:p-10 shadow-sm">
              <h3 className="font-serif text-3xl font-normal text-[#0A1128] sm:text-4xl">
                Experience the 2SR difference on your next project.
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-pretty text-base text-[#475569]">
                Let us structure an actionable scope with realistic timelines and dedicated resources.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0052CC] px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0052CC]/15 transition-all hover:bg-[#0043A8] hover:shadow-lg cursor-pointer"
                >
                  <span>Initiate a Conversation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
