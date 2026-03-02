import Link from 'next/link'
import { COMPANY, SERVICE_AREAS, SECTION_COPY } from '@/constants'

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden section-divide">
      {/* Vivid gradient background */}
      <div className="absolute inset-0 bg-cta-gradient" aria-hidden="true" />
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.06] bg-noise-dots" aria-hidden="true" />

      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4 text-fire-100">
            {SECTION_COPY.finalCta.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {SECTION_COPY.finalCta.titleLine1}
            <br />
            {SECTION_COPY.finalCta.titleLine2}
          </h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-xl mx-auto">
            {SECTION_COPY.finalCta.body}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-fire-600 text-lg font-black rounded-xl hover:bg-fire-100 transition-colors shadow-xl shadow-black/20"
            >
              Request a Free Estimate
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white text-lg font-bold rounded-xl border-2 border-white/50 hover:border-white hover:bg-white/10 transition-colors"
            >
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {COMPANY.email}
            </a>
          </div>

          {/* Service area pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SERVICE_AREAS.slice(0, 8).map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-white/80"
              >
                {area}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-white/80">
              + more
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
