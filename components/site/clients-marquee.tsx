import { clients } from "@/lib/site-data"

export function ClientsMarquee() {
  const marqueeItems = [...clients, ...clients, ...clients]

  return (
    <div aria-label="Sectors and clients we serve" className="border-y border-[#E2DFD5] bg-[#F1EEE7] py-7 sm:py-9">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#636875]">
          Trusted Partner Across Engineering &middot; Technology &middot; BFSI &middot; Corporate Infrastructure
        </p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="marquee-track flex items-center">
            {marqueeItems.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="mx-8 flex items-center gap-8 shrink-0 sm:mx-12"
              >
                <span className="font-serif text-xl tracking-normal text-[#2A2D34] transition-colors hover:text-[#111111] cursor-default sm:text-2xl">
                  {name}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#B8B3A6]" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
