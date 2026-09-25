"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const headlineWords = [
  { text: "People.", delay: 100 },
  { text: "Experiences.", delay: 300 },
  { text: "Infrastructure.", delay: 500, highlight: true },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="top" className="relative overflow-hidden bg-background pt-22 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 lg:pb-12">
      {/* Subtle 2SR Brand Watermark (directly echoing the official company letterhead) */}
      <div 
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 opacity-[0.03] select-none"
        aria-hidden="true"
      >
        <div className="relative h-[650px] w-[800px]">
          <Image
            src="/images/logo.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Subtle soft cool-blue ambient light in background */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#0052CC]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Main Editorial Headline */}
            <h1 className="font-serif text-[clamp(3.1rem,6.8vw,6.4rem)] font-normal leading-[1.02] tracking-tight text-[#0A1128]">
              {headlineWords.map((word) => (
                <span key={word.text} className="line-mask block">
                  <span
                    className={cn(
                      "line-inner",
                      mounted && "is-visible",
                      word.highlight ? "text-[#0052CC]" : "text-[#0A1128]",
                    )}
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
              <p className="text-pretty text-lg font-normal leading-relaxed text-[#334155] sm:text-xl">
                One partner for the people, experiences, and spaces that keep business moving. Delivered with discipline since 2019.
              </p>
            </div>

            {/* Dual Pill Buttons */}
            <div
              className={cn("reveal mt-9 flex flex-wrap items-center gap-3.5", mounted && "is-visible")}
              style={{ "--reveal-delay": "880ms" } as React.CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0052CC] px-7 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-[#0052CC]/15 transition-all duration-300 hover:bg-[#0043A8] hover:shadow-lg hover:shadow-[#0052CC]/25 cursor-pointer"
              >
                <span>Schedule a Consultation</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[#CBD5E1] bg-[#F8FAFC] px-7 py-3.5 text-[15px] font-semibold text-[#0A1128] transition-all duration-300 hover:bg-[#EDF2F7] hover:border-[#94A3B8] cursor-pointer"
              >
                <span>View Services</span>
              </Link>
            </div>

            {/* Social Proof Strip */}
            <div
              className={cn("reveal mt-12 sm:mt-16 flex items-center gap-4", mounted && "is-visible")}
              style={{ "--reveal-delay": "1050ms" } as React.CSSProperties}
            >
              <div className="flex -space-x-2.5 overflow-hidden">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0052CC] text-[11px] font-medium text-white shadow-xs">
                  2S
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0A1128] text-[11px] font-medium text-white shadow-xs">
                  IT
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#475569] text-[11px] font-medium text-white shadow-xs">
                  HR
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#0077FF] text-[10px] font-semibold text-white shadow-xs">
                  +1k
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-[#0A1128]">
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
                  "clip-reveal relative aspect-[5/4] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] shadow-[0_12px_40px_rgba(0,82,204,0.06)]",
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

              {/* Floating Case Study Card */}
              <div
                className={cn(
                  "reveal newgen-card absolute -bottom-6 right-3 sm:-bottom-8 sm:right-6 max-w-[320px] sm:max-w-[360px] rounded-xl border border-[#CBD5E1] bg-white p-3.5 shadow-[0_16px_36px_rgba(0,82,204,0.08)] backdrop-blur-md sm:p-4 cursor-pointer",
                  mounted && "is-visible",
                )}
                style={{ "--reveal-delay": "950ms" } as React.CSSProperties}
              >
                <Link href="/work" className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#F1F5F9] border border-[#E2E8F0]">
                    <Image
                      src="/images/recruitment.png"
                      alt="Case study thumbnail"
                      fill
                      sizes="56px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="line-clamp-2 font-serif text-[14px] font-normal leading-snug text-[#0A1128] group-hover:text-[#0052CC] transition-colors">
                      Specialized Engineering &amp; Technology Talent Scaling
                    </p>
                    <div className="mt-1 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                      <span className="rounded-full bg-[#EBF3FC] px-2 py-0.5 text-[#0052CC]">Case Study</span>
                      <span className="text-sm transition-transform duration-200 group-hover:translate-x-1 text-[#0052CC]">&rarr;</span>
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
