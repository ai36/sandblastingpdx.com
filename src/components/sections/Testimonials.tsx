import { TESTIMONIALS, SECTION_COPY } from '@/constants'
import { SectionWrapper, SectionHeading } from '@/components/ui/SectionWrapper'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`size-4 ${i < rating ? 'text-fire-500' : 'text-steel-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <SectionHeading {...SECTION_COPY.testimonials} centered />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.id}
            className="card card-fire flex flex-col p-6 lg:p-8"
          >
            <StarRating rating={t.rating} />
            <blockquote className="flex-1 mt-4">
              <p className="text-sm text-steel-300 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-steel-700">
              {/* Avatar placeholder */}
              <div className="size-9 rounded-full bg-fire-500/20 border border-fire-500/30 flex items-center justify-center text-sm font-bold text-fire-400 shrink-0">
                {t.author[0]}
              </div>
              <div>
                <p className="text-sm font-semibold text-steel-100">
                  {t.author}
                </p>
                <p className="text-xs text-steel-500">{t.location}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

    </SectionWrapper>
  )
}
