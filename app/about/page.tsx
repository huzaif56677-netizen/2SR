import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Reveal } from "@/components/site/reveal"
import { milestones, visionMission } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "About 2SR Innovations",
  description:
    "Founded in 2019, 2SR Innovations is an integrated corporate enablement firm delivering recruitment, corporate gifting, and HVAC/MEP solutions across India.",
}

const values = [
  {
    title: "Understanding Before Execution",
    text: "We never offer generic off-the-shelf answers. Every engagement begins by immersing ourselves in your organizational culture, technical requirements, and strategic goals.",
  },
  {
    title: "Direct Accountability",
    text: "You interface with experienced consultants who own deliverables from kickoff to completion, eliminating communication silos and finger-pointing.",
  },
  {
    title: "Quality Over Volume",
    text: "Whether screening candidates, assembling corporate gift suites, or commissioning mechanical ductwork, our standard is precision and lasting performance.",
  },
  {
    title: "Long-Term Partnerships",
    text: "Our business model is engineered around multi-year client relationships. We succeed when our clients scale and thrive over time.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Page Hero */}
        <section className="border-b border-[#E2DFD5] bg-[#F8F6F0] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
              Our Story &amp; Purpose
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-balance font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-[#111111]"
            >
              Built around people. Powered by expertise.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#3B4048] sm:text-xl">
              Established in 2019, 2SR Innovations began as a specialized recruitment consultancy committed to connecting exceptional professionals with forward-thinking enterprises. Today, we stand as an integrated corporate services firm spanning talent, experiences, and critical facility infrastructure.
            </Reveal>
          </div>
        </section>

        {/* Narrative & Visual Split */}
        <section className="border-b border-[#E2DFD5] bg-[#F8F6F0] py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left narrative */}
              <div className="lg:col-span-6">
                <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#636875]">
                  Our Evolution
                </Reveal>
                <Reveal as="h2" delay={80} className="font-serif text-3xl font-normal text-[#111111] sm:text-4xl">
                  Enabling corporate success through connected capabilities.
                </Reveal>
                <Reveal as="p" delay={140} className="mt-6 text-pretty text-base font-normal leading-relaxed text-[#3B4048] sm:text-lg">
                  In a rapidly evolving workplace environment, businesses struggle with fragmented vendors who fail to understand the larger corporate picture. 2SR Innovations solves this friction by maintaining high-discipline execution across recruitment, corporate relationship gifting, and HVAC/MEP physical facilities.
                </Reveal>
                <Reveal as="p" delay={200} className="mt-4 text-pretty text-base leading-relaxed text-[#4B515D]">
                  Through rigorous candidate screening, bespoke product curation, and technical engineering discipline, we ensure every touchpoint reinforces your organization&apos;s prestige and operational efficiency.
                </Reveal>

                <div className="mt-8 grid grid-cols-2 gap-6 border-t border-[#E2DFD5] pt-6">
                  <div>
                    <p className="font-serif text-4xl font-normal text-[#111111]">2019</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#636875]">Year Founded</p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl font-normal text-[#111111]">Pan-India</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#636875]">Regional Reach</p>
                  </div>
                </div>
              </div>

              {/* Right imagery */}
              <div className="lg:col-span-6">
                <div className="relative">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E2DFD5] bg-[#EAE7DF] shadow-md">
                    <Image
                      src="/images/about.png"
                      alt="The 2SR consulting team collaborating"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 hidden aspect-[4/3] w-56 overflow-hidden rounded-xl border-2 border-white bg-white shadow-xl sm:block">
                    <Image
                      src="/images/handshake.jpg"
                      alt="Partnership and client agreement"
                      fill
                      sizes="224px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission & Goals */}
        <section className="border-b border-[#E2DFD5] bg-[#F1EFE8] py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto">
              <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
                Strategic Foundation
              </Reveal>
              <Reveal as="h2" delay={80} className="font-serif text-3xl font-normal text-[#111111] sm:text-4xl">
                Vision, Mission &amp; Purpose
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              <Reveal delay={100} className="rounded-2xl border border-[#E2DFD5] bg-white p-8 shadow-xs">
                <span className="font-serif text-sm font-semibold text-[#111111]">01 &middot; Aspirational</span>
                <h3 className="mt-3 font-serif text-2xl font-normal text-[#111111]">Our Vision</h3>
                <p className="mt-4 text-pretty text-[15px] sm:text-base leading-relaxed text-[#4B515D]">
                  {visionMission.vision}
                </p>
              </Reveal>

              <Reveal delay={200} className="rounded-2xl border border-[#E2DFD5] bg-white p-8 shadow-xs">
                <span className="font-serif text-sm font-semibold text-[#111111]">02 &middot; Impact-Driven</span>
                <h3 className="mt-3 font-serif text-2xl font-normal text-[#111111]">Our Mission</h3>
                <p className="mt-4 text-pretty text-[15px] sm:text-base leading-relaxed text-[#4B515D]">
                  {visionMission.mission}
                </p>
              </Reveal>

              <Reveal delay={300} className="rounded-2xl border border-[#E2DFD5] bg-white p-8 shadow-xs">
                <span className="font-serif text-sm font-semibold text-[#111111]">03 &middot; Practical</span>
                <h3 className="mt-3 font-serif text-2xl font-normal text-[#111111]">The Goals</h3>
                <p className="mt-4 text-pretty text-[15px] sm:text-base leading-relaxed text-[#4B515D]">
                  {visionMission.goals}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="border-b border-[#E2DFD5] bg-[#F8F6F0] py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
                Milestones &amp; Journey
              </Reveal>
              <Reveal as="h2" delay={80} className="font-serif text-3xl font-normal text-[#111111] sm:text-4xl">
                Five years of intentional growth.
              </Reveal>
            </div>

            <div className="mt-12 divide-y divide-[#E2DFD5] border-y border-[#E2DFD5]">
              {milestones.map((m, i) => (
                <Reveal
                  key={m.year}
                  delay={i * 90}
                  className="grid grid-cols-1 items-start gap-4 py-8 sm:grid-cols-12 sm:gap-8 sm:py-10"
                >
                  <div className="sm:col-span-2">
                    <span className="font-serif text-3xl font-medium text-[#111111]">{m.year}</span>
                  </div>
                  <div className="sm:col-span-4">
                    <h3 className="font-serif text-2xl font-normal text-[#111111]">{m.title}</h3>
                  </div>
                  <div className="sm:col-span-6">
                    <p className="text-pretty text-base leading-relaxed text-[#4B515D]">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 sm:py-28 lg:py-32 bg-[#F1EFE8]">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
                Operating Principles
              </Reveal>
              <Reveal as="h2" delay={80} className="font-serif text-3xl font-normal text-[#111111] sm:text-4xl">
                The standards we work by every day.
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <Reveal
                  key={v.title}
                  delay={i * 90}
                  className="rounded-2xl border border-[#E2DFD5] bg-white p-7 shadow-xs"
                >
                  <span className="font-serif text-sm font-semibold text-[#111111]">0{i + 1}</span>
                  <h3 className="mt-3 font-serif text-xl font-normal text-[#111111]">{v.title}</h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-[#4B515D]">{v.text}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#2A2A2A] cursor-pointer"
              >
                <span>Partner With 2SR Innovations</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
