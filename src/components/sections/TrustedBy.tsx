import { TRUSTED_BY, SECTION_COPY } from '@/constants'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function TrustedBy() {
  return (
    <SectionWrapper alt compact noDivide>
      <p className="text-center text-xs font-bold uppercase tracking-widest text-steel-500 mb-8">
        {SECTION_COPY.trustedBy.label}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {TRUSTED_BY.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="card card-fire flex flex-col items-center gap-2 p-4 rounded-xl"
          >
            <Icon size={28} strokeWidth={1.5} className="text-fire-400" aria-hidden="true" />
            <span className="text-xs font-semibold text-steel-400 text-center leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
