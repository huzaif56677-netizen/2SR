"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { nav, contactInfo } from "@/lib/site-data"
import { Wordmark } from "./wordmark"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false)

    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      e.preventDefault()
      router.push("/")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

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
      className="fixed inset-x-0 top-0 z-50 bg-white border-0 outline-none shadow-none"
      style={{ backgroundColor: "#ffffff", border: "none", boxShadow: "none" }}
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
          onClick={handleLogoClick}
          className="group relative z-50 flex items-center cursor-pointer focus:outline-none"
          aria-label="2SR Innovations - Home"
        >
          <Wordmark size="md" light={false} />
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
                  "relative py-1 text-[15px] transition-colors cursor-pointer",
                  isActive
                    ? "text-[#0052CC] font-bold"
                    : "text-[#1E293B] hover:text-[#0052CC] font-medium",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full bg-[#0052CC] px-6 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#0043A8] cursor-pointer sm:inline-flex"
          >
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={cn(
              "relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full transition-colors cursor-pointer lg:hidden",
              open
                ? "border border-slate-300 bg-slate-100 text-[#0A1128]"
                : "border border-slate-300 text-[#0A1128] hover:border-[#0052CC] hover:text-[#0052CC] bg-transparent",
            )}
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

      {/* Mobile Menu Solid Opaque Sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-white text-[#0A1128] px-6 pt-24 pb-8 transition-all duration-300 lg:hidden overflow-y-auto",
          open
            ? "pointer-events-auto opacity-100 translate-y-0 visible"
            : "pointer-events-none opacity-0 -translate-y-4 invisible",
        )}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="flex flex-col">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#64748B]">
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
                    "flex items-center justify-between py-3.5 font-serif text-2xl transition-colors cursor-pointer",
                    isActive ? "text-[#0052CC] font-bold" : "text-[#0A1128] hover:text-[#0052CC]",
                  )}
                >
                  <span>{item.label}</span>
                  <span className={cn("text-base transition-transform", isActive ? "text-[#0052CC] translate-x-1" : "text-[#94A3B8]")}>&rarr;</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="border-t border-[#E2E8F0] pt-6 mt-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-[#0052CC] py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-[#0043A8] cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
          </Link>
          <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
            <div className="flex items-center gap-3 text-xs text-[#64748B]">
              <a href={`tel:${contactInfo.phoneRaw}`} className="hover:text-[#0052CC] font-medium text-[#0A1128]">
                {contactInfo.phone}
              </a>
              <span>&middot;</span>
              <a href={`mailto:${contactInfo.emailHr}`} className="hover:text-[#0052CC] font-medium text-[#0A1128]">
                {contactInfo.emailHr}
              </a>
            </div>
            <p className="text-[11px] text-[#94A3B8]">
              2SR Innovations &middot; People. Experiences. Infrastructure.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
