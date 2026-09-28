import Link from "next/link"
import Image from "next/image"
import { Reveal, ScrollFocusCard } from "./reveal"

const discoverySections = [
  {
    title: "About 2SR",
    tagline: "Our Journey & Purpose",
    description: "Founded in 2010, 2SR Innovations has grown from a specialized recruitment firm into an integrated corporate services partner.",
    href: "/about",
    image: "/images/about.png",
    stat: "Est. 2010",
  },
  {
    title: "Our Approach",
    tagline: "Disciplined 5-Stage Method",
    description: "Understand, Plan, Execute, Deliver, Support. A calm, structured framework applied to every single corporate deliverable.",
    href: "/approach",
    image: "/images/approach.png",
    stat: "5 Stages",
  },
  {
    title: "Industries Served",
    tagline: "Deep Domain Coverage",
    description: "From Financial Markets and IT to Real Estate, Heavy Industry, and Healthcare, discover our industry-specific capabilities.",
    href: "/industries",
    image: "/images/work-corporate.png",
    stat: "6 Domains",
  },
]

export function HomeDiscovery() {
  return (
    <section className="relative border-b border-[#CBD5E1] bg-background py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="border-b border-[#CBD5E1] pb-8">
          <Reveal as="div" className="mb-3 inline-flex items-center rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
            <span>Explore Further</span>
          </Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal
              as="h2"
              delay={60}
              className="max-w-2xl text-balance font-serif text-[clamp(2.1rem,5vw,4.2rem)] font-normal leading-[1.3] tracking-tight text-[#0A1128]"
            >
              Discover the organization behind the results.
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="max-w-xl text-pretty text-lg font-normal leading-relaxed text-[#334155] sm:text-xl lg:pb-1.5"
            >
              Explore our company history, disciplined delivery framework, and specialized cross-industry capabilities.
            </Reveal>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {discoverySections.map((item, i) => (
            <ScrollFocusCard
              key={item.title}
              delay={i * 240}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-white/95 px-2.5 py-0.5 text-xs font-semibold text-[#0052CC] shadow-xs backdrop-blur-xs">
                    {item.stat}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    {item.tagline}
                  </p>
                  <h3 className="mt-2 font-serif text-xl sm:text-2xl font-normal text-[#0A1128] group-hover:text-[#0052CC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0052CC] transition-transform duration-200 group-hover:translate-x-1 cursor-pointer"
                >
                  <span>Explore {item.title}</span>
                  <span className="text-sm">&rarr;</span>
                </Link>
              </div>
            </ScrollFocusCard>
          ))}
        </div>
      </div>
    </section>
  )
}
