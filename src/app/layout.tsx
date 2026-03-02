import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { SITE_META, COMPANY } from '@/constants'

const gaId = process.env.NEXT_PUBLIC_GA_ID

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_META.title,
    template: `%s | ${COMPANY.name}`,
  },
  description: SITE_META.description,
  keywords: [...SITE_META.keywords],
  metadataBase: new URL(SITE_META.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_META.url,
    siteName: COMPANY.name,
    title: SITE_META.title,
    description: SITE_META.description,
    images: [{ url: SITE_META.ogImage, width: 1200, height: 630, alt: COMPANY.name }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_META.title,
    description: SITE_META.description,
    images: [SITE_META.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

// ── Local Business JSON-LD ────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_META.url,
  name: COMPANY.name,
  description: SITE_META.description,
  url: SITE_META.url,
  email: COMPANY.email,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  areaServed: ['Portland, OR', 'Vancouver, WA', 'Beaverton, OR', 'Gresham, OR'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fontSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  )
}
