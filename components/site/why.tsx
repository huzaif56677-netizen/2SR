import { differentiators } from "@/lib/site-data"
import { Reveal, ScrollFocusCard } from "./reveal"

export function Why() {
  return (
    <section className="relative border-b border-[#CBD5E1] bg-background py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Premise */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal as="div" className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
                <span>Why 2SR Innovations</span>
              </Reveal>
              <Reveal
                as="h2"
                delay={60}
                className="text-balance font-serif text-[clamp(2.3rem,4.5vw,3.6rem)] font-normal leading-[1.08] tracking-tight text-[#0A1128]"
              >
                What makes working with us different.
              </Reveal>
              <Reveal as="p" delay={120} className="mt-5 text-pretty text-base font-normal leading-relaxed text-[#334155] sm:text-lg">
                We believe corporate engagements thrive on clear commitments, steady communication, and genuine accountability. We do not offer generic templates.
              </Reveal>
            </div>
          </div>

          {/* Right Column: Architectural Grid of Differentiators (one-by-one sequential scroll load) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <ScrollFocusCard
                  key={item.number}
                  delay={i * 180}
                  className="group flex flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF3FC] font-serif text-sm font-semibold text-[#0052CC] transition-transform duration-300 group-hover:scale-110">
                        {item.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-2xl font-normal text-[#0A1128] group-hover:text-[#0052CC] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty text-[15px] sm:text-base leading-relaxed text-[#475569]">
                      {item.text}
                    </p>
                  </div>
                </ScrollFocusCard>
              ))}

              {/* Stat card */}
              <ScrollFocusCard
                delay={4 * 180}
                className="flex flex-col justify-center rounded-2xl border border-[#0A1128] bg-[#0A1128] p-7 sm:p-8 text-center sm:text-left text-white shadow-lg cursor-pointer"
              >
                <p className="font-serif text-4xl font-normal text-white">5+ Years</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#00A3FF]">Dependable Corporate Track Record</p>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                  Trusted by growing enterprises and industry leaders across India.
                </p>
              </ScrollFocusCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
