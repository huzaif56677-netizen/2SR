import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { ClientsMarquee } from "@/components/site/clients-marquee"
import { Capabilities } from "@/components/site/capabilities"
import { Why } from "@/components/site/why"
import { HomeDiscovery } from "@/components/site/home-discovery"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Section 1: Hero Concept */}
        <Hero />

        {/* Marquee Divider */}
        <ClientsMarquee />

        {/* Section 2: Different Needs. One Partner. Concept */}
        <Capabilities />

        {/* Section 3: What Makes Working With Us Different */}
        <Why />

        {/* Section 4: Deep-dive Bridge to dedicated pages */}
        <HomeDiscovery />

        {/* Section 5: Let's Talk / Tell Us What You Need */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
