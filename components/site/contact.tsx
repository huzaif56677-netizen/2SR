"use client"

import { useState, type FormEvent } from "react"
import { cn } from "@/lib/utils"
import { contactInfo } from "@/lib/site-data"
import { Reveal } from "./reveal"

const interests = [
  "End-to-End Recruitment",
  "Corporate Gifting",
  "HVAC & MEP Services",
  "General Inquiry",
]

export function Contact({
  id = "contact",
  isStandalonePage = false,
}: {
  id?: string
  isStandalonePage?: boolean
}) {
  const [interest, setInterest] = useState<string>(interests[0])
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id={id} className="relative border-b border-[#E2DFD5] bg-[#F8F6F0] py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5">
            <Reveal as="div" className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#636875]">
              Let&apos;s talk
            </Reveal>

            <Reveal
              as="h2"
              delay={80}
              className="text-balance font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-normal leading-[1.04] tracking-tight text-[#111111]"
            >
              Tell us what you need.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 text-pretty text-base font-normal leading-relaxed text-[#3B4048] sm:text-lg">
              Share the essentials of your requirement. Our principals will review and respond with a structured proposal and practical next steps.
            </Reveal>

            {/* Direct Contact Cards */}
            <Reveal delay={200} className="mt-10 space-y-6 border-t border-[#E2DFD5] pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#636875]">
                  Direct Telephone
                </p>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="link-underline mt-1 font-serif text-3xl font-normal text-[#111111] hover:text-[#333333] transition-colors cursor-pointer"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#636875]">
                  Direct Email
                </p>
                <a
                  href={`mailto:${contactInfo.emailHr}`}
                  className="link-underline mt-1 block font-serif text-2xl text-[#111111] hover:text-[#333333] transition-colors cursor-pointer"
                >
                  {contactInfo.emailHr}
                </a>
                <a
                  href={`mailto:${contactInfo.emailGeneral}`}
                  className="link-underline mt-1 block text-base text-[#4B515D] hover:text-[#111111] transition-colors cursor-pointer"
                >
                  {contactInfo.emailGeneral}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#636875]">
                  Operating Hours
                </p>
                <p className="mt-1 text-base text-[#4B515D]">
                  {contactInfo.hours}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E2DFD5] bg-white p-8 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              {submitted ? (
                <div className="flex flex-col items-start justify-center py-12">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-[#111111]">
                    Enquiry Received.
                  </h3>
                  <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-[#4B515D]">
                    Thank you, <strong className="text-[#111111]">{formData.name || "Client"}</strong>. We have received your requirement for <strong className="text-[#111111]">{interest}</strong> and will follow up within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-[#111111] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111111] transition-colors hover:bg-[#111111] hover:text-white cursor-pointer"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selector */}
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[#636875]">
                      Service Requirement <span className="text-[#111111]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {interests.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setInterest(option)}
                          className={cn(
                            "rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 cursor-pointer",
                            interest === option
                              ? "border-[#111111] bg-[#111111] text-white font-semibold shadow-xs"
                              : "border-[#E2DFD5] bg-[#FAF8F5] text-[#4B515D] hover:border-[#111111] hover:text-[#111111]",
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields Grid */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#636875]">
                        Your Name <span className="text-[#111111]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-lg border border-[#D5D1C6] bg-white px-4 py-3 text-base text-[#111111] placeholder:text-[#A1A1AA] focus:border-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111]"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#636875]">
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corp"
                        className="w-full rounded-lg border border-[#D5D1C6] bg-white px-4 py-3 text-base text-[#111111] placeholder:text-[#A1A1AA] focus:border-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#636875]">
                        Email Address <span className="text-[#111111]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-[#D5D1C6] bg-white px-4 py-3 text-base text-[#111111] placeholder:text-[#A1A1AA] focus:border-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#636875]">
                        Phone Number <span className="text-[#111111]">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-[#D5D1C6] bg-white px-4 py-3 text-base text-[#111111] placeholder:text-[#A1A1AA] focus:border-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111]"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#636875]">
                      Brief Description of Requirement
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding roles to fill, gifting timeline, or facility specs..."
                      className="w-full resize-none rounded-lg border border-[#D5D1C6] bg-white px-4 py-3 text-base text-[#111111] placeholder:text-[#A1A1AA] focus:border-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <p className="text-xs text-[#6B7280]">
                      We treat all corporate inquiries with strict confidentiality.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-[#111111] px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#2A2A2A] hover:shadow-md cursor-pointer"
                    >
                      <span>Send Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
