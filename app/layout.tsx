import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { DM_Serif_Display, Inter } from "next/font/google"
import "./globals.css"

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const siteUrl = "https://2srinnovations.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "2SR Innovations | People. Experiences. Infrastructure.",
    template: "%s | 2SR Innovations",
  },
  description:
    "One trusted partner for the people, experiences and spaces that keep business moving. 2SR Innovations delivers end-to-end recruitment, corporate gifting, and HVAC & MEP engineering services.",
  keywords: [
    "2SR Innovations",
    "recruitment consulting",
    "staffing solutions",
    "corporate gifting",
    "executive search",
    "HVAC services",
    "MEP engineering",
    "talent acquisition",
  ],
  authors: [{ name: "2SR Innovations" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "2SR Innovations | People. Experiences. Infrastructure.",
    description:
      "One accountable partner for recruitment, bespoke corporate gifting, and turnkey HVAC & MEP services.",
    siteName: "2SR Innovations",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "2SR Innovations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "2SR Innovations | People. Experiences. Infrastructure.",
    description:
      "One accountable partner for recruitment, corporate gifting, and HVAC & MEP services.",
    images: ["/images/hero.png"],
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#0052CC",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-[#0052CC] selection:text-white">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
