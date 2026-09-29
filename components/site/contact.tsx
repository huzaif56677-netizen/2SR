"use client"

import { useState, useEffect, useRef, type FormEvent } from "react"
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
  const formRef = useRef<HTMLFormElement>(null)
  const [interest, setInterest] = useState<string>(interests[0])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [requiresChallenge, setRequiresChallenge] = useState(false)
  const [challengeVerified, setChallengeVerified] = useState(false)
  const [countdown, setCountdown] = useState<number | null>(null)

  // Honeypot field for bot protection (invisible to humans)
  const [honeypot, setHoneypot] = useState("")

  // Timing measurement to detect inhuman automated submissions (< 1.4s)
  const [mountTime, setMountTime] = useState<number>(0)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  function handleReset() {
    setSubmitted(false)
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    })
    setInterest(interests[0])
    setHoneypot("")
    setServerError(null)
    setRequiresChallenge(false)
    setChallengeVerified(false)
    setMountTime(Date.now())
    if (formRef.current) {
      formRef.current.reset()
    }
  }

  useEffect(() => {
    setMountTime(Date.now())
  }, [])

  // Auto-countdown after successful submission
  useEffect(() => {
    if (!submitted) return

    setCountdown(7)
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval)
          handleReset()
          return null
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [submitted])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setServerError(null)

    // Honeypot check
    if (honeypot.trim() !== "") {
      setSubmitted(true)
      return
    }

    // If challenge was required, ensure human verified
    if (requiresChallenge && !challengeVerified) {
      setServerError("Please complete the security verification challenge to proceed.")
      return
    }

    setLoading(true)

    const submitDurationMs = mountTime > 0 ? Date.now() - mountTime : 3000

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          service: interest,
          message: formData.message,
          honeypot,
          submitDurationMs,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.requiresChallenge) {
          setRequiresChallenge(true)
          setServerError(data.error || "Security verification required. Please verify below.")
          setLoading(false)
          return
        }

        setServerError(
          data.error || "Unable to send inquiry. Please try again or reach out to hr@2srinnovations.com directly."
        )
        setLoading(false)
        return
      }

      // Success: clean reset and show confirmation
      setSubmitted(true)
      setRequiresChallenge(false)
      setChallengeVerified(false)
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch {
      setServerError(
        "A network error occurred. Please check your connection or contact hr@2srinnovations.com directly."
      )
    } finally {
      setLoading(false)
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id={id} className="relative border-b border-[#CBD5E1] bg-background py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5">
            <Reveal as="div" className="mb-3 inline-flex items-center rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              <span>Let&apos;s talk</span>
            </Reveal>

            <Reveal
              as="h2"
              delay={80}
              className="text-balance font-serif text-[clamp(2.4rem,5vw,4.2rem)] font-normal leading-[1.38] sm:leading-[1.32] tracking-tight text-[#0A1128]"
            >
              Tell us what you need.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 text-pretty text-base font-normal leading-relaxed text-[#334155] sm:text-lg">
              Share the essentials of your requirement. Our principals will review and respond with a structured proposal and practical next steps.
            </Reveal>

            {/* Direct Contact Cards */}
            <Reveal delay={200} className="mt-10 space-y-6 border-t border-[#E2E8F0] pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                  Direct Telephone
                </p>
                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="link-underline mt-1 font-serif text-2xl sm:text-3xl font-normal text-[#0A1128] hover:text-[#0052CC] transition-colors cursor-pointer"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                  Direct Email
                </p>
                <a
                  href={`mailto:${contactInfo.emailGeneral}`}
                  className="link-underline mt-1 block font-serif text-xl sm:text-2xl text-[#0A1128] hover:text-[#0052CC] transition-colors cursor-pointer break-all sm:break-normal"
                >
                  {contactInfo.emailGeneral}
                </a>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                  Office Location
                </p>
                <p className="mt-1 font-serif text-xl sm:text-2xl font-normal text-[#0A1128]">
                  {contactInfo.address}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748B]">
                  Operating Hours
                </p>
                <p className="mt-1 text-base text-[#475569]">
                  {contactInfo.hours}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Secure Background Consultation Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#CBD5E1] bg-white p-5 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(0,82,204,0.04)]">
              {submitted ? (
                <div className="flex flex-col items-start justify-center py-10">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0052CC] text-white shadow-lg shadow-[#0052CC]/25">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0A1128] leading-tight">
                    Thank you. Your enquiry has been received.
                  </h3>
                  
                  <p className="mt-3.5 max-w-lg text-pretty text-base sm:text-lg leading-relaxed text-[#334155]">
                    Our team will review your requirements and get back to you shortly. A notification has been sent to our corporate desk at <strong className="text-[#0A1128]">{contactInfo.emailGeneral}</strong>.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-full bg-[#0052CC] px-7 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#0043A8] cursor-pointer shadow-xs"
                    >
                      Submit Another Requirement
                    </button>
                    {countdown !== null && (
                      <span className="text-xs text-[#64748B]">
                        Form resets in {countdown}s
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Invisible Honeypot Field */}
                  <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="form_website_hp">Security Check (leave empty)</label>
                    <input
                      id="form_website_hp"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {serverError && (
                    <div className="rounded-xl border border-red-200 bg-red-50/80 p-4 text-sm text-red-800">
                      <p className="font-semibold">Unable to submit enquiry</p>
                      <p className="mt-1 text-xs text-red-700">{serverError}</p>
                    </div>
                  )}

                  {/* Category Selector */}
                  <div>
                    <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B]">
                      Service Requirement <span className="text-[#0052CC]">*</span>
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
                              ? "border-[#0052CC] bg-[#0052CC] text-white font-semibold shadow-xs"
                              : "border-[#CBD5E1] bg-[#F8FAFC] text-[#334155] hover:border-[#0052CC] hover:text-[#0052CC]",
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
                      <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                        Your Name <span className="text-[#0052CC]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-4 py-3 text-base text-[#0A1128] placeholder:text-[#94A3B8] focus:border-[#0052CC] focus:outline-none focus:ring-1 focus:ring-[#0052CC]"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                        Company / Organization
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        maxLength={120}
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Elvaris Industries"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-4 py-3 text-base text-[#0A1128] placeholder:text-[#94A3B8] focus:border-[#0052CC] focus:outline-none focus:ring-1 focus:ring-[#0052CC]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                        Email Address <span className="text-[#0052CC]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={120}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-4 py-3 text-base text-[#0A1128] placeholder:text-[#94A3B8] focus:border-[#0052CC] focus:outline-none focus:ring-1 focus:ring-[#0052CC]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                        Phone Number <span className="text-[#0052CC]">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={25}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-[#CBD5E1] bg-white px-4 py-3 text-base text-[#0A1128] placeholder:text-[#94A3B8] focus:border-[#0052CC] focus:outline-none focus:ring-1 focus:ring-[#0052CC]"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                      Brief Description of Requirement
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={2500}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding roles to fill, gifting timeline, or facility specs..."
                      className="w-full resize-none rounded-lg border border-[#CBD5E1] bg-white px-4 py-3 text-base text-[#0A1128] placeholder:text-[#94A3B8] focus:border-[#0052CC] focus:outline-none focus:ring-1 focus:ring-[#0052CC]"
                    />
                  </div>

                  {/* Suspicious Activity Human Verification Challenge (only shown if flagged) */}
                  {requiresChallenge && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                        Security Verification
                      </p>
                      <label className="mt-2.5 flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={challengeVerified}
                          onChange={(e) => setChallengeVerified(e.target.checked)}
                          className="h-4 w-4 rounded border-amber-400 text-[#0052CC] focus:ring-[#0052CC]"
                        />
                        <span className="text-sm font-medium text-amber-900">
                          I confirm that I am a human submitting this corporate requirement.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <p className="text-xs text-[#64748B]">
                      We treat all corporate inquiries with strict confidentiality.
                    </p>
                    <button
                      type="submit"
                      disabled={loading}
                      className={cn(
                        "inline-flex items-center justify-center rounded-full bg-[#0052CC] px-8 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-[#0052CC]/15 transition-all duration-200 hover:bg-[#0043A8] hover:shadow-lg cursor-pointer",
                        loading && "opacity-70 cursor-not-allowed",
                      )}
                    >
                      {loading ? (
                        <span className="inline-flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Enquiry...</span>
                        </span>
                      ) : (
                        <span>Send Enquiry</span>
                      )}
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
