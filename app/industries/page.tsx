import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Reveal, ScrollFocusCard } from "@/components/site/reveal"
import { industrySectors } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Explore the industries 2SR Innovations serves across Financial Markets, Technology, Engineering, Real Estate, Healthcare, and Hospitality.",
}

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Page Hero */}
        <section className="border-b border-[#CBD5E1] bg-background py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
              <span>Industries &amp; Environments</span>
            </Reveal>

            <Reveal
              as="h1"
              delay={60}
              className="text-balance font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-[#0A1128]"
            >
              Working across industries and specialized environments.
            </Reveal>

            <Reveal as="p" delay={120} className="mt-5 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#334155] sm:text-xl">
              Every industry comes with distinct operational standards, compliance frameworks, and cultural dynamics. Our consultants and engineering teams bring contextual intelligence to every engagement.
            </Reveal>
          </div>
        </section>

        {/* Industries Architectural Grid */}
        <section className="bg-background py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {industrySectors.map((sector, i) => (
                <ScrollFocusCard
                  key={sector.category}
                  delay={(i % 3) * 260}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] cursor-pointer"
                >
                  <div>
                    {/* Visual Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1F5F9]">
                      <Image
                        src={sector.image}
                        alt={sector.category}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-7 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                        {sector.tagline}
                      </p>
                      <h3 className="mt-2.5 font-serif text-2xl sm:text-3xl font-normal text-[#0A1128] group-hover:text-[#0052CC] transition-colors">
                        {sector.category}
                      </h3>
                      <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#475569]">
                        {sector.description}
                      </p>

                      {/* Sub-sectors chips */}
                      <div className="mt-6 border-t border-[#F1F5F9] pt-5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                          Domain Verticals:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sector.subsectors.map((sub) => (
                            <span
                              key={sub}
                              className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#334155]"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-7 sm:p-8 pt-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0052CC] transition-transform duration-200 group-hover:translate-x-1 cursor-pointer"
                    >
                      <span>Inquire for {sector.category}</span>
                      <span className="text-sm">&rarr;</span>
                    </Link>
                  </div>
                </ScrollFocusCard>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-14 border-t border-[#E2E8F0] pt-10 text-center">
              <h3 className="font-serif text-3xl font-normal text-[#0A1128] sm:text-4xl">
                Operating in a specialized or niche industry?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-[#475569]">
                Our team routinely handles bespoke recruitment mandates and customized physical MEP projects tailored to proprietary specifications.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0052CC] px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-[#0052CC]/15 transition-all hover:bg-[#0043A8] hover:shadow-lg cursor-pointer"
                >
                  <span>Discuss Your Specialized Requirements</span>
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
