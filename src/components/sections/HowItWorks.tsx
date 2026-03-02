import Link from 'next/link'
import { HOW_IT_WORKS, COMPANY, SECTION_COPY } from '@/constants'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="max-w-4xl mx-auto">
        <SectionHeading {...SECTION_COPY.howItWorks} centered />

        <div className="space-y-4">
          {HOW_IT_WORKS.map((step, index) => (
            <div key={step.number} className="card flex gap-6 p-6 lg:p-8">
              {/* Step number bubble */}
              <div className="shrink-0">
                <div className="size-14 rounded-2xl bg-fire-500 flex items-center justify-center shadow-[var(--shadow-step)]">
                  <span className="text-white font-black text-xl">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-1">
                <p className="text-xs font-bold uppercase tracking-widest text-fire-500 mb-1">
                  Step {step.number}
                </p>
                <h3 className="text-lg font-bold text-steel-50 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-steel-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="card mt-10 p-8 text-center">
          <p className="text-lg font-semibold text-steel-100 mb-2">
            Ready to get started?
          </p>
          <p className="text-sm text-steel-400 mb-6">
            Most estimates are turned around within a few hours during business days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fire-500 hover:bg-fire-600 text-white font-bold rounded-xl transition-colors"
            >
              Request a Free Estimate
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-sm text-fire-400 hover:text-fire-300 font-semibold transition-colors"
            >
              Or email us directly →
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
