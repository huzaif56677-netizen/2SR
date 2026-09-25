import Link from "next/link"
import { nav, contactInfo } from "@/lib/site-data"
import { Wordmark } from "./wordmark"

const serviceLinks = [
  { label: "End-to-End Recruitment", href: "/services#recruitment" },
  { label: "Corporate Gifting", href: "/services#gifting" },
  { label: "HVAC & MEP Engineering", href: "/services#hvac-mep" },
  { label: "Executive & Niche Staffing", href: "/services#recruitment" },
  { label: "Preventative Maintenance", href: "/services#hvac-mep" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E2E8F0] bg-[#F8FAFC] text-[#0A1128] transition-colors">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block cursor-pointer focus:outline-none" aria-label="2SR Innovations">
              <Wordmark size="md" />
            </Link>
            <p className="mt-5 max-w-sm text-pretty text-[15px] leading-relaxed text-[#475569]">
              One accountable partner for recruitment, curated corporate gifting, and turnkey HVAC &amp; MEP engineering. Delivering measurable value with quiet discipline since 2019.
            </p>

            <div className="mt-8 space-y-2.5 text-[15px] text-[#475569]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Phone:</span>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="font-medium text-[#0A1128] transition-colors hover:text-[#0052CC] cursor-pointer"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Email:</span>
                <a
                  href={`mailto:${contactInfo.emailHr}`}
                  className="font-medium text-[#0A1128] transition-colors hover:text-[#0052CC] cursor-pointer"
                >
                  {contactInfo.emailHr}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1 text-xs text-[#64748B]">
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:col-span-4 lg:col-start-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1128]">
                Company
              </h3>
              <ul className="mt-5 space-y-3.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="link-underline text-[15px] text-[#475569] transition-colors hover:text-[#0052CC] cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1128]">
                Capabilities
              </h3>
              <ul className="mt-5 space-y-3.5">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="link-underline text-[15px] text-[#475569] transition-colors hover:text-[#0052CC] cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Consultation CTA Block */}
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0_4px_24px_rgba(0,82,204,0.04)] lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              Ready to talk?
            </p>
            <h4 className="mt-2 font-serif text-2xl font-normal text-[#0A1128]">
              Discuss your upcoming requirements.
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#475569]">
              Whether hiring talent, ordering corporate gifts, or commissioning MEP works, our specialists are ready to help.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#0052CC] px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-colors hover:bg-[#0043A8] cursor-pointer"
            >
              <span>Schedule a Consultation</span>
            </Link>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#E2E8F0] pt-8 text-xs text-[#64748B] sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} 2SR Innovations. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>Staffing &middot; Gifting &middot; HVAC &amp; MEP</span>
            <span className="hidden sm:inline">&middot;</span>
            <Link href="/contact" className="transition-colors hover:text-[#0052CC] cursor-pointer">
              Privacy &amp; Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Signature 2SR Blue bar at the bottom matching official letterhead document */}
      <div className="h-1.5 w-full bg-[#0052CC]" aria-hidden="true" />
    </footer>
  )
}
