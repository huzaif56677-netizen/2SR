import type { Metadata } from "next"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Contact as ContactSection } from "@/components/site/contact"
import { Reveal } from "@/components/site/reveal"
import { faqs } from "@/lib/site-data"

export const metadata: Metadata = {
  title: "Contact & Consultation",
  description:
    "Get in touch with 2SR Innovations for corporate recruitment mandates, custom corporate gifting, and HVAC/MEP engineering inquiries.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-24 sm:pt-28">
        {/* Contact Page Header */}
        <section className="border-b border-[#E2E8F0] bg-background py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <Reveal as="div" className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EBF3FC] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0052CC]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0052CC]" />
              <span>Direct Consultation</span>
            </Reveal>

            <Reveal
              as="h1"
              delay={80}
              className="text-balance font-serif text-[clamp(2.6rem,6vw,4.8rem)] font-normal leading-[1.02] tracking-tight text-[#0A1128]"
            >
              Let&apos;s talk. Tell us what you need.
            </Reveal>

            <Reveal as="p" delay={140} className="mt-6 max-w-3xl text-pretty text-lg font-normal leading-relaxed text-[#334155] sm:text-xl">
              We respond promptly to all corporate inquiries with practical insights and defined next steps. Reach us directly by phone or email, or submit the consultation form below.
            </Reveal>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection id="contact-form" isStandalonePage={true} />

        {/* FAQ Section */}
        <section className="border-b border-[#E2E8F0] bg-background py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0052CC]">
                Frequently Asked Questions
              </span>
              <h2 className="mt-2 font-serif text-3xl font-normal text-[#0A1128] sm:text-4xl">
                Common questions about partnering with 2SR.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-7 sm:p-8 shadow-xs"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0A1128]">
                    {faq.q}
                  </h3>
                  <p className="mt-3.5 text-pretty text-base leading-relaxed text-[#475569]">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
