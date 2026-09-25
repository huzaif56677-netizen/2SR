import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Reveal } from "@/components/site/reveal"
import { services } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Comprehensive overview of 2SR Innovations services: End-to-End Recruitment, Bespoke Corporate Gifting, and Turnkey HVAC & MEP Engineering.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Page Header */}
        <section className="border-b border-[#E2DFD5] bg-[#F8F6F0] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
              Full Scope of Capabilities
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-balance font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-[#111111]"
            >
              Three capabilities. One standard of excellence.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#3B4048] sm:text-xl">
              2SR Innovations brings specialized domain expertise under a unified delivery framework. We eliminate the administrative burden and operational risk of managing multiple disconnected vendors.
            </Reveal>

            {/* Quick Anchor Navigation */}
            <Reveal delay={200} className="mt-10 flex flex-wrap gap-3">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-[#D5D1C6] bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111111] transition-all duration-200 hover:bg-[#111111] hover:text-white cursor-pointer"
                >
                  <span className="font-serif mr-2">{s.index}</span>
                  <span>{s.pillar} &middot; {s.kicker}</span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Detailed Service Deep-Dives */}
        <div className="divide-y divide-[#E2DFD5] bg-[#F8F6F0]">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-24 py-20 sm:py-28 lg:py-32"
              >
                <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
                  {/* Service Header Row */}
                  <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
                    {/* Visual & Checklist */}
                    <div className={isEven ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"}>
                      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-[#E2DFD5] bg-[#EAE7DF] shadow-md">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1 font-serif text-sm font-medium text-[#111111] shadow-xs backdrop-blur-xs">
                          Pillar {service.index}
                        </span>
                      </div>

                      {/* Capabilities Checklist */}
                      <div className="mt-8 rounded-2xl border border-[#E2DFD5] bg-white p-7 shadow-xs">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#636875]">
                          Scope &amp; Deliverables
                        </h4>
                        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {service.capabilities.map((cap) => (
                            <li key={cap} className="flex items-center gap-2.5 text-sm text-[#374151]">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Detailed Text & Sub-services */}
                    <div className={isEven ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"}>
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-3xl font-medium text-[#111111]">
                          {service.index}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
                          {service.pillar} &middot; {service.kicker}
                        </span>
                      </div>

                      <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal leading-[1.08] text-[#111111]">
                        {service.title}
                      </h2>

                      <p className="mt-5 text-pretty text-lg font-normal leading-relaxed text-[#2A2D34] sm:text-xl">
                        {service.lead}
                      </p>

                      <p className="mt-4 text-pretty text-base leading-relaxed text-[#4B515D]">
                        {service.body}
                      </p>

                      {/* Sub-services Cards */}
                      {service.subServices && (
                        <div className="mt-8 space-y-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#636875]">
                            Core Delivery Models
                          </p>
                          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                            {service.subServices.map((sub) => (
                              <div
                                key={sub.title}
                                className="rounded-xl border border-[#E2DFD5] bg-white p-5 shadow-xs transition-colors hover:border-[#CBC6B9]"
                              >
                                <h5 className="font-serif text-lg font-normal text-[#111111]">
                                  {sub.title}
                                </h5>
                                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#4B515D]">
                                  {sub.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action CTA */}
                      <div className="mt-10 flex flex-wrap items-center gap-4">
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#2A2A2A] cursor-pointer"
                        >
                          <span>Consult on {service.pillar}</span>
                        </Link>
                        <Link
                          href="/work"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#555555] transition-colors cursor-pointer"
                        >
                          <span>View Case Studies &rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )
          })}
        </div>

        {/* Global CTA Section */}
        <section className="border-t border-[#E2DFD5] bg-[#EFECE4] py-20 sm:py-24">
          <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8 lg:px-12">
            <h3 className="font-serif text-3xl font-normal text-[#111111] sm:text-4xl">
              Require a tailored engagement or multi-disciplinary package?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#4B515D]">
              Speak directly with our leadership team to configure a flexible arrangement combining talent acquisition, corporate gifting, or infrastructure maintenance.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#2A2A2A] cursor-pointer"
              >
                <span>Schedule a Consultation</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
