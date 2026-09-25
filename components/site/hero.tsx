"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const headlineWords = [
  { text: "People.", delay: 100 },
  { text: "Experiences.", delay: 300 },
  { text: "Infrastructure.", delay: 500 },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Huge Editorial Headline & Actions */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Main Editorial Headline — matches LexEdge reference scale */}
            <h1 className="font-serif text-[clamp(3.1rem,6.8vw,6.4rem)] font-normal leading-[1.02] tracking-tight text-[#111111]">
              {headlineWords.map((word) => (
                <span key={word.text} className="line-mask block">
                  <span
                    className={cn("line-inner", mounted && "is-visible")}
                    style={{ "--reveal-delay": `${word.delay}ms` } as React.CSSProperties}
                  >
                    {word.text}
                  </span>
                </span>
              ))}
            </h1>

            {/* Standfirst / Description */}
            <div
              className={cn("reveal mt-7 max-w-xl", mounted && "is-visible")}
              style={{ "--reveal-delay": "700ms" } as React.CSSProperties}
            >
              <p className="text-pretty text-lg font-normal leading-relaxed text-[#3B4048] sm:text-xl">
                One partner for the people, experiences, and spaces that keep business moving. Delivered with discipline since 2019.
              </p>
            </div>

            {/* Dual Pill Buttons — exactly like LexEdge reference */}
            <div
              className={cn("reveal mt-9 flex flex-wrap items-center gap-3.5", mounted && "is-visible")}
              style={{ "--reveal-delay": "880ms" } as React.CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-[#2A2A2A] hover:shadow-md cursor-pointer"
              >
                <span>Schedule a Consultation</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-[#E5E2D9] px-7 py-3.5 text-[15px] font-medium text-[#111111] transition-all duration-300 hover:bg-[#DCD8CC] cursor-pointer"
              >
                <span>View Services</span>
              </Link>
            </div>

            {/* Social Proof Strip — exactly matching reference: avatars + "Trusted by 500+ Clients" */}
            <div
              className={cn("reveal mt-12 sm:mt-16 flex items-center gap-4", mounted && "is-visible")}
              style={{ "--reveal-delay": "1050ms" } as React.CSSProperties}
            >
              <div className="flex -space-x-2.5 overflow-hidden">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8F6F0] bg-[#222225] text-[11px] font-medium text-white">
                  2S
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8F6F0] bg-[#434854] text-[11px] font-medium text-white">
                  IT
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8F6F0] bg-[#676D7C] text-[11px] font-medium text-white">
                  HR
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8F6F0] bg-[#111111] text-[10px] font-semibold text-white">
                  +1k
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-[#111111]">
                  Trusted by 500+ Corporate Clients
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Imagery with Floating Case Study Card */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative">
              {/* Primary Large Image */}
              <div
                className={cn(
                  "clip-reveal relative aspect-[5/4] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E2DFD5] bg-[#EAE7DF] shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
                  mounted && "is-visible",
                )}
                style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
              >
                <Image
                  src="/images/hero.png"
                  alt="Corporate executive conversation in modern workplace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Case Study Card (matching the LexEdge reference screenshot in bottom corner) */}
              <div
                className={cn(
                  "reveal absolute -bottom-6 right-3 sm:-bottom-8 sm:right-6 max-w-[320px] sm:max-w-[360px] rounded-xl border border-[#E3DFD5] bg-white/95 p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300 hover:shadow-lg sm:p-4",
                  mounted && "is-visible",
                )}
                style={{ "--reveal-delay": "950ms" } as React.CSSProperties}
              >
                <Link href="/work" className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#EAE7DF]">
                    <Image
                      src="/images/recruitment.png"
                      alt="Case study thumbnail"
                      fill
                      sizes="56px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="line-clamp-2 font-serif text-[14px] font-normal leading-snug text-[#111111] group-hover:text-black">
                      Specialized Engineering &amp; Technology Talent Scaling
                    </p>
                    <div className="mt-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                      <span className="rounded-xs bg-[#F4F1EA] px-1.5 py-0.5 text-[#4B515D]">Case Study</span>
                      <span className="text-sm transition-transform duration-200 group-hover:translate-x-1 text-[#111111]">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
