import Image from "next/image"
import { services } from "@/lib/site-data"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      {/* Intro */}
      <div className="grid grid-cols-1 gap-8 border-b border-border pb-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal
            as="p"
            className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-accent"
          >
            What we do
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="text-balance font-serif text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink"
          >
            Three capabilities. One trusted partner.
          </Reveal>
        </div>
        <div className="flex items-end lg:col-span-5">
          <Reveal as="p" delay={160} className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            From people to physical spaces, our work is built around understanding what a business
            actually needs — and delivering it without the fuss.
          </Reveal>
        </div>
      </div>

      {/* Editorial split rows */}
      <div>
        {services.map((service, i) => {
          const reversed = i % 2 === 1
          return (
            <article
              key={service.index}
              className="grid grid-cols-1 items-center gap-8 border-b border-border py-16 lg:grid-cols-12 lg:gap-12 lg:py-20"
            >
              {/* Image */}
              <div className={cn("lg:col-span-6", reversed && "lg:order-2")}>
                <Reveal variant="clip" className="group relative aspect-[16/11] w-full overflow-hidden rounded-sm">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </Reveal>
              </div>

              {/* Copy */}
              <div className={cn("lg:col-span-6", reversed ? "lg:order-1 lg:pr-8" : "lg:pl-8")}>
                <Reveal>
                  <div className="mb-5 flex items-baseline gap-4">
                    <span className="font-serif text-2xl text-accent">{service.index}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                      {service.pillar} &middot; {service.kicker}
                    </span>
                  </div>
                  <h3 className="text-balance font-serif text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-foreground/80">
                    {service.lead}
                  </p>
                  <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2 text-sm text-foreground/75"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
