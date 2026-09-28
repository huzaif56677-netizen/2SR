"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const headlineLines = [
  { text: "Strengthening your", delay: 100 },
  { text: "people, culture, and", delay: 280 },
  { text: "building systems.", delay: 460, highlight: true },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setRevealed(true), 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden bg-background pt-22 pb-12 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16 border-b border-[#CBD5E1]">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 xl:col-span-6">
            {/* Main Editorial Headline */}
            <h1 className="font-serif text-[clamp(2.1rem,4.5vw,3.75rem)] sm:text-[clamp(2.4rem,4.4vw,3.9rem)] font-normal leading-[1.24] sm:leading-[1.2] tracking-tight flex flex-col gap-1 sm:gap-2">
              {headlineLines.map((line) => (
                <span
                  key={line.text}
                  className={cn(
                    "line-mask block whitespace-normal sm:whitespace-nowrap",
                    revealed && "revealed !overflow-visible",
                  )}
                >
                  <span
                    className={cn(
                      "line-inner block",
                      mounted && "is-visible",
                    )}
                    style={{ "--reveal-delay": `${line.delay}ms` } as React.CSSProperties}
                  >
                    {line.highlight ? (
                      <span className="text-[#0052CC] italic inline-block">
                        {line.text}
                      </span>
                    ) : (
                      <span className="text-[#0A1128] inline-block">
                        {line.text}
                      </span>
                    )}
                  </span>
                </span>
              ))}
            </h1>

            {/* Standfirst / Description */}
            <div
              className={cn("reveal mt-6 sm:mt-7 max-w-xl", mounted && "is-visible")}
              style={{ "--reveal-delay": "700ms" } as React.CSSProperties}
            >
              <p className="text-pretty text-base font-normal leading-relaxed text-[#1E3A66] sm:text-xl">
                One partner for the people, experiences, and spaces that keep business moving. Delivered with discipline since 2010.
              </p>
            </div>

            {/* Dual Pill Buttons */}
            <div
              className={cn("reveal mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5", mounted && "is-visible")}
              style={{ "--reveal-delay": "880ms" } as React.CSSProperties}
            >
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#0052CC] px-7 py-3.5 text-center text-[15px] font-semibold text-white shadow-md shadow-[#0052CC]/20 transition-all duration-300 hover:bg-[#0043A8] hover:shadow-lg hover:shadow-[#0052CC]/30 cursor-pointer"
              >
                <span>Schedule a Consultation</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-[#0052CC]/30 bg-white px-7 py-3.5 text-center text-[15px] font-semibold text-[#0052CC] shadow-xs transition-all duration-300 hover:bg-[#EBF4FD] hover:border-[#0052CC] cursor-pointer"
              >
                <span>View Services</span>
              </Link>
            </div>

            {/* Social Proof Strip */}
            <div
              className={cn("reveal mt-10 sm:mt-16 flex items-center gap-3.5", mounted && "is-visible")}
              style={{ "--reveal-delay": "1050ms" } as React.CSSProperties}
            >
              <div className="flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-3.5 py-1.5 shadow-xs">
                {/* Google Multi-Color G Icon */}
                <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                </svg>
                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-[#F59E0B]" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold tracking-tight text-[#00388F]">
                4.8 Rating on Google
              </p>
            </div>
          </div>

          {/* Right Column: Large Imagery with Floating Case Study Card */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative">
              {/* Primary Large Image */}
              <div
                className={cn(
                  "clip-reveal relative aspect-[5/4] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-[0_12px_40px_rgba(0,82,204,0.06)]",
                  mounted && "is-visible",
                )}
                style={{ "--reveal-delay": "400ms" } as React.CSSProperties}
              >
                <Image
                  src="/images/hero.jpg"
                  alt="2SR Innovations executive corporate headquarters and infrastructure"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Case Study Card */}
              <div
                className={cn(
                  "reveal newgen-card absolute -bottom-6 left-3 right-3 sm:left-auto sm:right-6 max-w-none sm:max-w-[360px] rounded-xl border border-[#CBD5E1] bg-white p-3 sm:p-4 shadow-[0_16px_36px_rgba(0,82,204,0.08)] backdrop-blur-md cursor-pointer",
                  mounted && "is-visible",
                )}
                style={{ "--reveal-delay": "950ms" } as React.CSSProperties}
              >
                <Link href="/services#recruitment" className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#F1F5F9] border border-[#E2E8F0]">
                    <Image
                      src="/images/recruitment.png"
                      alt="Recruitment showcase thumbnail"
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
                      <span className="rounded-full bg-[#EBF3FC] px-2 py-0.5 text-[#0052CC]">Featured Capability</span>
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
