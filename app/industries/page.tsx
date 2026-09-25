import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Reveal } from "@/components/site/reveal"
import { industrySectors } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "Explore the industry sectors 2SR Innovations serves across Financial Markets, Technology, Engineering, Real Estate, Healthcare, and Hospitality.",
}

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Page Hero */}
        <section className="border-b border-[#E2DFD5] bg-[#F8F6F0] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
              Sectors &amp; Environments
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-balance font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-[#111111]"
            >
              Working across industries and specialized environments.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#3B4048] sm:text-xl">
              Every industry comes with distinct operational standards, compliance frameworks, and cultural dynamics. Our consultants and engineering teams bring contextual intelligence to every engagement.
            </Reveal>
          </div>
        </section>

        {/* Sectors Architectural Grid */}
        <section className="bg-[#F8F6F0] py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industrySectors.map((sector, i) => (
                <Reveal
                  key={sector.category}
                  delay={i * 90}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2DFD5] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#CBC6B9] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                  <div>
                    {/* Visual Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1EFE8]">
                      <Image
                        src={sector.image}
                        alt={sector.category}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 font-serif text-xs font-medium text-[#111111] shadow-xs backdrop-blur-xs">
                        Sector 0{i + 1}
                      </span>
                    </div>

                    {/* Sector Content */}
                    <div className="p-7 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#636875]">
                        {sector.tagline}
                      </p>
                      <h3 className="mt-2.5 font-serif text-2xl sm:text-3xl font-normal text-[#111111] group-hover:text-black">
                        {sector.category}
                      </h3>
                      <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#4B515D]">
                        {sector.description}
                      </p>

                      {/* Sub-sectors chips */}
                      <div className="mt-6 border-t border-[#EAE7DF] pt-5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#636875] mb-3">
                          Domain Verticals:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sector.subsectors.map((sub) => (
                            <span
                              key={sub}
                              className="rounded-full border border-[#E2DFD5] bg-[#FAF8F5] px-3 py-1 text-xs font-medium text-[#374151]"
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
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] transition-transform duration-200 group-hover:translate-x-1 cursor-pointer"
                    >
                      <span>Inquire for {sector.category}</span>
                      <span className="text-sm">&rarr;</span>
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="mt-20 border-t border-[#E2DFD5] pt-16 text-center">
              <h3 className="font-serif text-3xl font-normal text-[#111111] sm:text-4xl">
                Operating in a specialized or niche industry?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-[#4B515D]">
                Our team routinely handles bespoke recruitment mandates and customized physical MEP projects tailored to proprietary specifications.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#111111] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#2A2A2A] cursor-pointer"
                >
                  <span>Discuss Your Sector Needs</span>
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
