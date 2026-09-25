import Image from "next/image"
import { milestones } from "@/lib/site-data"
import { Reveal } from "./reveal"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Statement + image */}
        <div className="lg:col-span-7">
          <Reveal as="p" className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-accent">
            About 2SR Innovations
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="text-balance font-serif text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink"
          >
            Built around people. Powered by expertise.
          </Reveal>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            <Reveal as="p" delay={140} className="text-pretty text-base leading-relaxed text-foreground/80">
              Founded in 2019, 2SR Innovations began as a recruitment-led firm helping companies
              meet their human-capital needs across engineering, technology and specialised domains.
            </Reveal>
            <Reveal as="p" delay={200} className="text-pretty text-base leading-relaxed text-muted-foreground">
              Today we work across three connected capabilities — recruitment, corporate gifting and
              HVAC &amp; MEP — supporting businesses with a structured, hands-on approach and clear
              communication at every step.
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal variant="clip" className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/about.png"
              alt="A professional team collaborating in a warm minimal office"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>

      {/* Milestones */}
      <div className="mt-20 border-t border-border pt-12">
        <Reveal as="p" className="mb-10 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
          A short history
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 70}>
              <p className="font-serif text-3xl text-accent">{m.year}</p>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
