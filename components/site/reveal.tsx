"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  variant?: "fade" | "clip"
  once?: boolean
}

/**
 * High-performance scroll reveal built on IntersectionObserver.
 * Smoothly cascades items one-by-one as the user scrolls.
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
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            entry.target.classList.add("is-visible")
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
            entry.target.classList.remove("is-visible")
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref as never}
      className={cn(
        variant === "clip" ? "clip-reveal" : "reveal",
        visible && "is-visible",
        className,
      )}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          transitionDelay: `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  )
}

/**
 * New-Gen interactive card that triggers both:
 * 1. Staggered scroll entrance (one-by-one loading)
 * 2. Center-viewport focus + hover lift and ambient illumination
 */
export function ScrollFocusCard({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Entrance observer
    const entranceObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            entry.target.classList.add("is-visible")
            entranceObserver.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    )

    // Center focal scroll observer (highlights card as you scroll past it)
    const focalObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setFocused(entry.isIntersecting)
        }
      },
      { threshold: 0.45, rootMargin: "-12% 0px -20% 0px" },
    )

    entranceObserver.observe(el)
    focalObserver.observe(el)

    return () => {
      entranceObserver.disconnect()
      focalObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "reveal newgen-card",
        visible && "is-visible",
        focused && "is-focused",
        className,
      )}
      style={
        {
          "--reveal-delay": `${delay}ms`,
          transitionDelay: `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
