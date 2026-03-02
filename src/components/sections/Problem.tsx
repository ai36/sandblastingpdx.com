import { PAIN_POINTS, SECTION_COPY } from '@/constants'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

export function Problem() {
  return (
    <SectionWrapper id="problem">
      <div className="max-w-5xl mx-auto">
        <SectionHeading {...SECTION_COPY.problem} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {PAIN_POINTS.map(({ icon: Icon, headline, body }) => (
            <div
              key={headline}
              className="card flex gap-4 p-6 lg:p-8"
            >
              <span className="shrink-0 size-10 rounded-xl bg-steel-800 flex items-center justify-center text-fire-400 mt-0.5">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-steel-100 mb-2">
                  &ldquo;{headline}&rdquo;
                </h3>
                <p className="text-sm text-steel-400 leading-relaxed">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge line */}
        <p className="mt-10 text-center text-lg text-steel-400">
          If any of this sounds like your last project,{' '}
          <span className="text-fire-400 font-semibold">
            there&apos;s a better way.
          </span>
        </p>
      </div>
    </SectionWrapper>
  )
}
