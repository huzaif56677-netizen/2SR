import Image from "next/image"
import { projects } from "@/lib/site-data"
import { Reveal } from "./reveal"

export function Work() {
  return (
    <section id="work" className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-12 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Reveal as="p" className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-accent">
              Selected work
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="text-balance font-serif text-[clamp(2rem,4.4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink"
            >
              A look at what we deliver.
            </Reveal>
          </div>
          <Reveal as="p" delay={140} className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Case studies are being added as we publish them. The examples below are placeholders —
            real projects and outcomes will replace them.
          </Reveal>
        </div>

        <div className="mt-4">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 60}
              className="group grid grid-cols-1 items-center gap-6 border-b border-border py-8 lg:grid-cols-12 lg:gap-10"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm lg:col-span-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="lg:col-span-2">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {project.category}
                </p>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="hidden justify-end lg:col-span-1 lg:flex">
                <span className="text-xl text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
                  &rarr;
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
