import { approach } from "@/lib/site-data"
import { Reveal } from "./reveal"

export function Approach() {
  return (
    <section id="approach" className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal as="p" className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-accent">
                How we work
              </Reveal>
              <Reveal
                as="h2"
                delay={80}
                className="text-balance font-serif text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink"
              >
                A calm, structured approach.
              </Reveal>
              <Reveal as="p" delay={140} className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Every engagement follows the same disciplined path — whether we&apos;re placing a
                candidate, delivering a gifting programme or executing an MEP project.
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-7">
            {approach.map((item, i) => (
              <Reveal
                key={item.step}
                as="li"
                delay={i * 60}
                className="group grid grid-cols-[auto_1fr] items-start gap-6 border-t border-border py-8 last:border-b"
              >
                <span className="font-serif text-2xl text-muted-foreground transition-colors group-hover:text-accent">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
