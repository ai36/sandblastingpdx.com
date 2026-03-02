import Link from 'next/link'
import { IconMail } from '@tabler/icons-react'
import { COMPANY, NAV_LINKS, SERVICES, SERVICE_AREAS } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-steel-950 border-t border-steel-700">
      {/* Main grid */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="size-8 rounded-lg bg-fire-500 flex items-center justify-center text-white font-black text-sm">
                S
              </span>
              <span className="text-steel-50 font-black text-lg tracking-tight">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-sm text-steel-400 leading-relaxed mb-4">
              {COMPANY.tagline}. Serving Portland, Vancouver WA, and the Pacific
              Northwest since {COMPANY.founded}.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.social.facebook}
                aria-label="Facebook"
                className="p-2 rounded-lg text-steel-500 hover:text-fire-400 hover:bg-steel-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={COMPANY.social.instagram}
                aria-label="Instagram"
                className="p-2 rounded-lg text-steel-500 hover:text-fire-400 hover:bg-steel-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-bold text-steel-100 uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/#services`}
                    className="text-sm text-steel-400 hover:text-fire-400 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reports"
                  className="text-sm text-steel-400 hover:text-fire-400 transition-colors"
                >
                  Work Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas column */}
          <div>
            <h3 className="text-sm font-bold text-steel-100 uppercase tracking-widest mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="text-sm text-steel-400">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-bold text-steel-100 uppercase tracking-widest mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-steel-400 hover:text-fire-400 transition-colors"
              >
                <IconMail size={16} strokeWidth={1.75} aria-hidden="true" />
                {COMPANY.email}
              </a>
            </div>
            <div className="mt-4 space-y-1">
              <p className="text-xs text-steel-500">{COMPANY.hours.weekdays}</p>
              <p className="text-xs text-steel-500">{COMPANY.hours.saturday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-steel-800">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-steel-600">
            © {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <nav className="flex items-center gap-4" aria-label="Footer navigation">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-steel-600 hover:text-steel-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
