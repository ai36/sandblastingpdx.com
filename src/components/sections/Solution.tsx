import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, IMAGES, SECTION_COPY } from '@/constants'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

export function Solution() {
  return (
    <SectionWrapper id="services" alt>
      <div className="max-w-6xl mx-auto">
        <SectionHeading {...SECTION_COPY.solution} />

        {/* Before / After visual */}
        <div className="relative rounded-2xl overflow-hidden mb-16 bg-steel-800 border border-steel-700 shadow-[var(--shadow-card-lg)]">
          <div className="grid grid-cols-2">
            {/* Before */}
            <div className="relative p-8 lg:p-12 flex flex-col justify-end min-h-[280px]">
              <Image
                src={IMAGES.beforeRust}
                alt="Heavily rusted metal surface before sandblasting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-red-900/70 text-red-300 text-xs font-bold uppercase tracking-wide mb-3">
                  Before
                </span>
                <p className="text-sm text-red-200 font-medium">
                  Heavy rust, failing paint, poor adhesion profile — coating will
                  fail within months
                </p>
              </div>
            </div>
            {/* After */}
            <div className="relative p-8 lg:p-12 flex flex-col justify-end min-h-[280px] border-l border-steel-700">
              <Image
                src={IMAGES.afterClean}
                alt="Clean bare metal surface after sandblasting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-green-900/70 text-green-300 text-xs font-bold uppercase tracking-wide mb-3">
                  After
                </span>
                <p className="text-sm text-green-200 font-medium">
                  Bare metal, SSPC surface profile — ready for primer or powder
                  coat, guaranteed adhesion
                </p>
              </div>
            </div>
          </div>
          {/* Divider line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-fire-500/60" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="services-detail">
          {SERVICES.map(({ icon: Icon, ...service }) => (
            <div
              key={service.slug}
              className="card card-fire card-on-alt p-6 lg:p-8 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="shrink-0 size-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-fire-400">
                  <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-steel-50 group-hover:text-fire-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-steel-400 mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-steel-300">
                    <svg className="size-4 text-fire-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA below services */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-fire-500 hover:bg-fire-600 text-white font-bold rounded-xl transition-colors text-lg"
          >
            Get a Free Estimate for Your Job
            <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}
