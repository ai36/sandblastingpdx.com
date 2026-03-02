import { FEATURES, SECTION_COPY } from '@/constants'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

export function Features() {
  return (
    <SectionWrapper id="features" alt>
      <div className="max-w-5xl mx-auto">
        <SectionHeading {...SECTION_COPY.features} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map(({ benefit, feature, icon: Icon }) => (
            <div
              key={benefit}
              className="card card-fire card-on-alt flex gap-5 p-6 lg:p-8 group"
            >
              <span className="shrink-0 size-10 rounded-xl bg-fire-500/10 flex items-center justify-center text-fire-400">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-steel-50 mb-2 group-hover:text-fire-400 transition-colors">
                  {benefit}
                </h3>
                <p className="text-sm text-steel-400 leading-relaxed">
                  {feature}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
