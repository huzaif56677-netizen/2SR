import Image from "next/image"
import { industries } from "@/lib/site-data"
import { Reveal } from "./reveal"

export function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="max-w-2xl">
        <Reveal as="p" className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-accent">
          Who we serve
        </Reveal>
        <Reveal
          as="h2"
          delay={80}
          className="text-balance font-serif text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink"
        >
          Working across industries and environments.
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, i) => (
          <Reveal
            key={industry.name}
            delay={(i % 3) * 80}
            className="group relative aspect-[5/4] overflow-hidden rounded-sm"
          >
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
            <h3 className="absolute inset-x-0 bottom-0 p-5 font-serif text-xl font-medium text-background sm:text-2xl">
              {industry.name}
            </h3>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
