"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type Milestone = {
  year: string
  title: string
  text: string
}

export function ScrollTimeline({ milestones }: { milestones: Milestone[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return
          const rect = containerRef.current.getBoundingClientRect()
          const viewportHeight = window.innerHeight

          // Start line growth when container top enters 65% of viewport
          // Complete line growth when container bottom reaches 40% of viewport
          const startOffset = viewportHeight * 0.65
          const endOffset = viewportHeight * 0.4
          const totalDistance = rect.height + (startOffset - endOffset)
          const currentDistance = startOffset - rect.top

          const calculatedProgress = Math.min(
            Math.max(currentDistance / totalDistance, 0),
            1,
          )

          setProgress(calculatedProgress)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="relative mt-12 sm:mt-16">
      {/* Background Track Line */}
      <div
        className="absolute left-4 top-4 bottom-8 w-[2.5px] -translate-x-1/2 rounded-full bg-[#E2E8F0] sm:left-1/2"
        aria-hidden="true"
      />

      {/* Dynamic Animated Scroll Progress Line */}
      <div
        className="absolute left-4 top-4 w-[2.5px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#0052CC] via-[#2684FF] to-[#0052CC] transition-[height] duration-150 ease-out sm:left-1/2 shadow-[0_0_12px_rgba(0,82,204,0.35)]"
        style={{ height: `${progress * 100}%` }}
        aria-hidden="true"
      >
        {/* Glowing Head of the Timeline Line */}
        <div
          className={cn(
            "absolute -bottom-1.5 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#0052CC] shadow-[0_0_10px_#0052CC] transition-opacity duration-300",
            progress > 0.02 ? "opacity-100" : "opacity-0",
          )}
        />
      </div>

      {/* Milestone Items */}
      <div className="space-y-10 sm:space-y-16">
        {milestones.map((item, index) => {
          // Calculate when this milestone node gets reached by the line
          const threshold = milestones.length > 1 ? index / (milestones.length - 1) : 0
          const isReached = progress >= threshold * 0.95
          const isEven = index % 2 === 0

          return (
            <div
              key={item.year}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className="relative flex flex-col sm:flex-row items-start sm:items-center"
            >
              {/* Center Timeline Node Dot */}
              <div
                className={cn(
                  "absolute left-4 top-5 sm:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white transition-all duration-500 sm:left-1/2",
                  isReached
                    ? "border-[#0052CC] bg-[#0052CC] text-white shadow-[0_0_16px_rgba(0,82,204,0.45)] scale-110"
                    : "border-[#CBD5E1] text-[#94A3B8] shadow-xs",
                )}
              >
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-all duration-300",
                    isReached ? "bg-white" : "bg-[#CBD5E1]",
                  )}
                />
              </div>

              {/* Desktop Alternating Layout */}
              {/* Left Column (Desktop) */}
              <div
                className={cn(
                  "w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-12",
                  isEven ? "sm:text-right" : "sm:order-2 sm:pl-12 sm:text-left",
                )}
              >
                <div
                  className={cn(
                    "transition-all duration-500",
                    isReached ? "opacity-100 translate-y-0" : "opacity-75",
                  )}
                >
                  <span
                    className={cn(
                      "font-serif text-3xl sm:text-4xl font-semibold tracking-tight transition-colors duration-300",
                      isReached ? "text-[#0052CC]" : "text-[#94A3B8]",
                    )}
                  >
                    {item.year}
                  </span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mt-0.5">
                    Phase 0{index + 1}
                  </span>
                </div>
              </div>

              {/* Right Column / Content Card (Desktop) */}
              <div
                className={cn(
                  "w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-0 mt-3 sm:mt-0",
                  isEven ? "sm:order-2 sm:pl-12" : "sm:order-1 sm:pr-12",
                )}
              >
                <div
                  className={cn(
                    "newgen-card rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-500 cursor-pointer",
                    isReached
                      ? "border-[#0052CC]/50 shadow-[0_8px_30px_rgba(0,82,204,0.08)] ring-1 ring-[#0052CC]/20"
                      : "border-[#CBD5E1] shadow-xs",
                  )}
                >
                  <h3
                    className={cn(
                      "font-serif text-xl sm:text-2xl font-normal transition-colors duration-300",
                      isReached ? "text-[#0A1128]" : "text-[#334155]",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-pretty text-sm sm:text-[15px] leading-relaxed text-[#475569]">
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
