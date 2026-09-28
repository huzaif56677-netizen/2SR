"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type ApproachStep = {
  step: string
  title: string
  lead: string
  text: string
}

export function ApproachFrameworkSection({ steps }: { steps: ApproachStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return

          const focalLine = window.innerHeight * 0.44
          let closestIdx = 0
          let minDistance = Infinity

          itemRefs.current.forEach((el, index) => {
            if (!el) return
            const rect = el.getBoundingClientRect()
            const center = rect.top + rect.height / 2
            const distance = Math.abs(center - focalLine)

            if (distance < minDistance) {
              minDistance = distance
              closestIdx = index
            }
          })

          setActiveIndex(closestIdx)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [steps.length])

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start"
    >
      {/* Fixed/Sticky Left Column on Desktop */}
      <aside className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
          The 5-Stage Framework
        </span>
        <h2 className="mt-2.5 font-serif text-3xl font-normal leading-tight text-[#0A1128] sm:text-4xl">
          Predictable outcomes through disciplined steps.
        </h2>
        <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-[#334155]">
          By standardizing discovery, planning, execution, verification, and support, we ensure every stakeholder experiences clarity at every juncture.
        </p>

        {/* Image fixed directly below the text with no dead empty space */}
        <div className="mt-6 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#CBD5E1] bg-[#F1F5F9] shadow-sm">
          <Image
            src="/images/approach.png"
            alt="Corporate strategy and consulting team reviewing structured 5-stage project methodology"
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover"
            priority
          />
        </div>
      </aside>

      {/* 5 Points Column with Smooth Scroll-Driven Focus */}
      <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
        {steps.map((item, index) => {
          const isFocused = activeIndex === index

          return (
            <div
              key={item.step}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={cn(
                "relative rounded-2xl p-6 sm:p-7 transition-all duration-300 ease-out border-none outline-none ring-0 select-none",
                isFocused
                  ? "bg-white opacity-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] scale-[1.01]"
                  : "bg-transparent opacity-70 sm:opacity-30 hover:opacity-85 scale-100",
              )}
            >
              <div className="flex items-start gap-5 sm:gap-6">
                {/* Step Number */}
                <span
                  className={cn(
                    "shrink-0 font-serif text-3xl sm:text-4xl font-medium tracking-tight transition-colors duration-300",
                    isFocused ? "text-[#0052CC]" : "text-[#94A3B8]",
                  )}
                >
                  {item.step}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span
                    className={cn(
                      "block text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                      isFocused ? "text-[#0052CC]" : "text-[#94A3B8]",
                    )}
                  >
                    {item.lead}
                  </span>

                  <h3
                    className={cn(
                      "mt-1 font-serif text-xl sm:text-2xl font-normal tracking-tight transition-colors duration-300",
                      isFocused ? "text-[#0A1128]" : "text-[#64748B]",
                    )}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={cn(
                      "mt-2 text-pretty text-sm sm:text-[15px] leading-relaxed transition-colors duration-300",
                      isFocused ? "text-[#334155]" : "text-[#94A3B8]",
                    )}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
