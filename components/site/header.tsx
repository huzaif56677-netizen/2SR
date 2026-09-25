"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { nav } from "@/lib/site-data"
import { Wordmark } from "./wordmark"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[#CBD5E1] bg-white/98 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          : "border-b border-[#CBD5E1] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-4 transition-all duration-300 sm:px-8 lg:px-12",
          scrolled ? "h-16 sm:h-18" : "h-20 sm:h-22",
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group relative z-50 flex items-center cursor-pointer focus:outline-none"
          aria-label="2SR Innovations - Home"
        >
          <Wordmark size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main Navigation">
          {nav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 text-[15px] font-medium transition-colors cursor-pointer",
                  isActive
                    ? "text-[#0052CC] font-semibold"
                    : "text-[#475569] hover:text-[#0052CC]",
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#0052CC]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full bg-[#0052CC] px-6 py-2.5 text-[14px] font-medium text-white shadow-xs transition-all duration-200 hover:bg-[#0043A8] hover:shadow-md cursor-pointer sm:inline-flex"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#CBD5E1] text-[#0A1128] transition-colors hover:border-[#0052CC] hover:text-[#0052CC] cursor-pointer lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={cn(
                "h-0.5 w-5 bg-current transition-all duration-300",
                open && "translate-y-[8px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-current transition-all duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-current transition-all duration-300",
                open && "-translate-y-[8px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-white px-6 pt-24 pb-8 transition-all duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4",
        )}
      >
        <div className="flex flex-col">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#64748B]">
            Navigation
          </p>
          <nav className="flex flex-col divide-y divide-[#E2E8F0]" aria-label="Mobile Navigation">
            {nav.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between py-4 font-serif text-2xl transition-colors cursor-pointer",
                    isActive ? "text-[#0052CC] font-medium" : "text-[#0A1128] hover:text-[#0052CC]",
                  )}
                >
                  <span>{item.label}</span>
                  <span className="text-base text-[#64748B]">&rarr;</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[#0052CC] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#0043A8] cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
          </Link>
          <p className="mt-4 text-center text-xs text-[#64748B]">
            2SR Innovations &middot; People. Experiences. Infrastructure.
          </p>
        </div>
      </div>
    </header>
  )
}
