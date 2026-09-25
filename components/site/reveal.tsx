"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  variant?: "fade" | "clip"
  /** Only reveal once (default true) */
  once?: boolean
}

/**
 * Lightweight scroll reveal built on IntersectionObserver.
 * Respects prefers-reduced-motion via CSS in globals.css.
 */
export function Reveal({
  children,
  as,
  className,
  delay = 0,
  variant = "fade",
  once = true,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove("is-visible")
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref as never}
      className={cn(variant === "clip" ? "clip-reveal" : "reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
