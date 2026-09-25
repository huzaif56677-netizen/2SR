import Image from "next/image"
import Link from "next/link"
import { services } from "@/lib/site-data"
import { Reveal } from "./reveal"

export function Capabilities() {
  return (
    <section className="relative border-b border-[#E2DFD5] bg-[#F8F6F0] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-[#E2DFD5] pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
              Integrated Capabilities
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="text-balance font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-normal leading-[1.04] tracking-tight text-[#111111]"
            >
              Different needs. One accountable partner.
            </Reveal>
          </div>
          <Reveal as="p" delay={140} className="max-w-md text-pretty text-base font-normal leading-relaxed text-[#3B4048] sm:text-lg">
            We bridge the gap between human talent, corporate relationship culture, and physical facility engineering — eliminating the friction of managing disconnected vendors.
          </Reveal>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.index}
              delay={i * 120}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#E2DFD5] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#CBC6B9] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Image Header */}
                <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#EAE7DF] bg-[#F1EFE8]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 font-serif text-xs font-medium text-[#111111] shadow-xs backdrop-blur-xs">
                    Pillar {service.index}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#636875]">
                  {service.pillar} &middot; {service.kicker}
                </p>
                <h3 className="mt-2.5 font-serif text-2xl font-normal leading-snug text-[#111111] group-hover:text-black">
                  {service.title}
                </h3>
                <p className="mt-3.5 text-pretty text-[15px] leading-relaxed text-[#4B515D]">
                  {service.lead}
                </p>

                {/* Micro tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.capabilities.slice(0, 4).map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full border border-[#E5E2D9] bg-[#FAF8F5] px-3 py-1 text-xs font-medium text-[#374151]"
                    >
                      {cap}
                    </span>
                  ))}
                  {service.capabilities.length > 4 && (
                    <span className="rounded-full border border-[#E5E2D9] bg-[#F1EFE8] px-2.5 py-1 text-xs text-[#6B7280]">
                      +{service.capabilities.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 border-t border-[#EAE7DF] pt-5">
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111] transition-all duration-200 group-hover:translate-x-1 cursor-pointer"
                >
                  <span>Explore {service.pillar}</span>
                  <span className="text-sm">&rarr;</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
