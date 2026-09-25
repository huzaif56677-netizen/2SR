import { differentiators } from "@/lib/site-data"
import { Reveal } from "./reveal"

export function Why() {
  return (
    <section className="relative border-b border-[#E2DFD5] bg-[#F1EFE8] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading & Premise */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
                Why 2SR Innovations
              </Reveal>
              <Reveal
                as="h2"
                delay={80}
                className="text-balance font-serif text-[clamp(2.3rem,4.5vw,3.6rem)] font-normal leading-[1.08] tracking-tight text-[#111111]"
              >
                What makes working with us different.
              </Reveal>
              <Reveal as="p" delay={140} className="mt-6 text-pretty text-base font-normal leading-relaxed text-[#3B4048] sm:text-lg">
                We believe corporate engagements thrive on clear commitments, steady communication, and genuine accountability. We do not offer generic templates.
              </Reveal>
            </div>
          </div>

          {/* Right Column: Architectural Grid of Differentiators */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <Reveal
                  key={item.number}
                  delay={i * 90}
                  className="group flex flex-col justify-between rounded-xl border border-[#E2DFD5] bg-white p-7 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBC6B9] hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F1EFE8] font-serif text-sm font-semibold text-[#111111]">
                        {item.number}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#636875]">
                        {item.subtitle}
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-2xl font-normal text-[#111111] group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty text-[15px] sm:text-base leading-relaxed text-[#4B515D]">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}

              {/* Stat card */}
              <Reveal
                delay={5 * 90}
                className="flex flex-col justify-center rounded-xl border border-[#DCD8CC] bg-[#E8E4DA] p-7 sm:p-8 text-center sm:text-left"
              >
                <p className="font-serif text-4xl font-normal text-[#111111]">5+ Years</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#636875]">Dependable Corporate Track Record</p>
                <p className="mt-3 text-sm leading-relaxed text-[#4B515D]">
                  Trusted by growing enterprises and industry leaders across India.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
