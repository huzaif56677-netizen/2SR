import { clients } from "@/lib/site-data"

function ClientLogoBadge({ item }: { item: { name: string; logo: string } }) {
  // Policybazaar and Kotak: solid colored badges (blue and red) filled edge-to-edge with no white margins
  if (item.name === "Policybazaar" || item.name === "Kotak Securities") {
    return (
      <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center overflow-hidden rounded-lg shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className="h-full w-full object-cover select-none"
          loading="lazy"
        />
      </div>
    )
  }

  // ICICI Lombard: transparent wide logo displayed at natural aspect ratio with no square letterbox white space
  if (item.name === "ICICI Lombard") {
    return (
      <div className="relative flex h-8 sm:h-9 w-auto max-w-[130px] items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className="h-7 sm:h-8 w-auto object-contain select-none"
          loading="lazy"
        />
      </div>
    )
  }

  // Other logos (Aditya Birla, Chola, Motilal Oswal): clean badge
  return (
    <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center overflow-hidden rounded-lg bg-white p-0.5 shadow-xs border border-[#CBD5E1]/60 shrink-0 transition-transform duration-300 group-hover:scale-105">
      <img
        src={item.logo}
        alt={`${item.name} logo`}
        className="max-h-full max-w-full object-contain select-none"
        loading="lazy"
      />
    </div>
  )
}

export function ClientsMarquee() {
  // 4 identical sets so that a -50% CSS translation equals exactly 2 sets, resulting in an imperceptible seamless infinite loop
  const marqueeItems = [...clients, ...clients, ...clients, ...clients]

  return (
    <div aria-label="Industries and clients we serve" className="border-y border-[#CBD5E1] bg-white/70 py-5 sm:py-6">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#64748B]">
          Trusted Partner Across Engineering &middot; Technology &middot; BFSI &middot; Corporate Infrastructure
        </p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="marquee-track flex items-center">
            {marqueeItems.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="mx-6 flex items-center gap-7 shrink-0 sm:mx-10"
              >
                <div className="flex items-center gap-3.5 group cursor-default">
                  {/* Official Company Logo to the left */}
                  <ClientLogoBadge item={item} />

                  {/* Company Name Text */}
                  <span className="font-serif text-xl tracking-normal text-[#1E293B] transition-colors group-hover:text-[#0052CC] cursor-default sm:text-2xl whitespace-nowrap">
                    {item.name}
                  </span>
                </div>

                <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]/30" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
