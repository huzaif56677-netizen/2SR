import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Reveal, ScrollFocusCard } from "@/components/site/reveal"
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
      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Page Hero */}
        <section className="border-b border-[#E2E8F0] bg-background py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
              <span>How We Work</span>
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-balance font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-[#0A1128]"
            >
              A calm, structured approach to every requirement.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#334155] sm:text-xl">
              We replace guesswork and fragmented coordination with a disciplined, five-stage delivery framework. Whether filling key executive positions, producing corporate gift collections, or engineering MEP systems, the methodology remains rock-solid.
            </Reveal>
          </div>
        </section>

        {/* 5 Stages Detail */}
        <section className="border-b border-[#CBD5E1] bg-background py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Sticky Sidebar on Desktop */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                    The 5-Stage Framework
                  </span>
                  <h2 className="mt-3 font-serif text-3xl font-normal text-[#0A1128] sm:text-4xl">
                    Predictable outcomes through disciplined steps.
                  </h2>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-[#334155]">
                    By standardizing discovery, planning, execution, verification, and support, we ensure every stakeholder experiences clarity at every juncture.
                  </p>

                  <div className="mt-8 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#F1F5F9] shadow-md">
                    <Image
                      src="/images/collaboration.png"
                      alt="Team executing a structured corporate engagement"
                      fill
                      sizes="350px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Sequential Steps */}
              <div className="lg:col-span-8 divide-y divide-[#CBD5E1]">
                {approach.map((item, i) => (
                  <Reveal key={item.step} delay={i * 200} className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-12 sm:gap-8">
                    <div className="sm:col-span-2">
                      <span className="font-serif text-4xl font-medium text-[#0052CC]">{item.step}</span>
                    </div>
                    <div className="sm:col-span-10">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                        {item.lead}
                      </span>
                      <h3 className="mt-1 font-serif text-2xl font-normal text-[#0A1128] sm:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-pretty text-base leading-relaxed text-[#475569]">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance Principles */}
        <section className="bg-background py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0052CC]">
                Governance &amp; Assurance
              </span>
              <h2 className="mt-2 font-serif text-3xl font-normal text-[#0A1128] sm:text-4xl">
                The principles governing our delivery.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {executionPillars.map((p, i) => (
                <ScrollFocusCard
                  key={p.num}
                  delay={i * 240}
                  className="rounded-2xl border border-[#CBD5E1] bg-white p-7 shadow-xs cursor-pointer"
                >
                  <span className="font-serif text-sm font-semibold text-[#0052CC]">{p.num}</span>
                  <h4 className="mt-3 font-serif text-xl font-normal text-[#0A1128]">{p.title}</h4>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-[#475569]">{p.desc}</p>
                </ScrollFocusCard>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center sm:p-12 shadow-sm">
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
