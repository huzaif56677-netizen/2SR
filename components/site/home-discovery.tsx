import Link from "next/link"
import Image from "next/image"
import { Reveal } from "./reveal"

const discoverySections = [
  {
    title: "About 2SR",
    tagline: "Our Journey & Purpose",
    description: "Founded in 2019, 2SR Innovations has grown from a specialized recruitment firm into an integrated corporate services partner.",
    href: "/about",
    image: "/images/about.png",
    stat: "Est. 2019",
  },
  {
    title: "Our Approach",
    tagline: "Disciplined 5-Stage Method",
    description: "Understand, Plan, Execute, Deliver, Support. A calm, structured framework applied to every single corporate deliverable.",
    href: "/approach",
    image: "/images/collaboration.png",
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
  {
    title: "Selected Work",
    tagline: "Case Studies & Outcomes",
    description: "Examine verified engagements across high-volume recruitment drives, executive festive gifting, and commercial HVAC overhauls.",
    href: "/work",
    image: "/images/work-engineering.png",
    stat: "Case Studies",
  },
]

export function HomeDiscovery() {
  return (
    <section className="relative border-b border-[#E2E8F0] bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E2E8F0] pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal as="div" className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
              <span>Explore Further</span>
            </Reveal>
            <Reveal
              as="h2"
              delay={80}
              className="text-balance font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-normal leading-[1.04] tracking-tight text-[#0A1128]"
            >
              Discover the organization behind the results.
            </Reveal>
          </div>
          <Reveal as="p" delay={140} className="max-w-md text-pretty text-base font-normal leading-relaxed text-[#334155] sm:text-lg">
            Explore our company history, disciplined delivery framework, cross-industry expertise, and past engagements.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {discoverySections.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#0052CC]/50 hover:shadow-[0_12px_36px_rgba(0,82,204,0.08)]"
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
