'use client'

import { useState, useEffect } from 'react'

// ── Types ─────────────────────────────────────────────────────────────────────
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

// ── Config ────────────────────────────────────────────────────────────────────
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const COOKIE_NAME = `${(process.env.NEXT_PUBLIC_PROJECT_NAME ?? 'app')
  .toLowerCase()
  .replace(/[\s.]+/g, '_')}_analytics_consent`

const COOKIE_DAYS = 365

// ── Helpers ───────────────────────────────────────────────────────────────────
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`
}

function loadGA(id: string) {
  if (document.querySelector(`script[src*="${id}"]`)) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', id)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)
}

// ── Component ─────────────────────────────────────────────────────────────────
export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!GA_ID) return

    const consent = getCookie(COOKIE_NAME)

    if (consent !== 'declined') {
      loadGA(GA_ID)
    }

    if (!consent) {
      // Slight delay so the banner doesn't flash on hydration
      const t = setTimeout(() => setVisible(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    setCookie(COOKIE_NAME, 'accepted', COOKIE_DAYS)
    setVisible(false)
  }

  function decline() {
    setCookie(COOKIE_NAME, 'declined', COOKIE_DAYS)
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'denied' })
    }
    setVisible(false)
  }

  if (!visible || !GA_ID) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:px-6 md:pb-6"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="max-w-3xl mx-auto card card-fire p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-steel-300 leading-relaxed">
          We use analytics to understand how visitors interact with the site and
          improve your experience. Analytics are{' '}
          <span className="text-steel-100 font-semibold">enabled by default</span>{' '}
          — you can opt out at any time.
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-steel-400 hover:text-steel-200 font-semibold transition-colors"
          >
            Opt out
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold bg-fire-500 hover:bg-fire-600 text-white rounded-xl transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
