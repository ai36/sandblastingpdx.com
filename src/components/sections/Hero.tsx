import Link from "next/link";
import { COMPANY, HERO_LOCATIONS } from "@/constants";

const TRUST_SIGNALS = [
  `${COMPANY.jobsCompleted}+ Jobs Completed`,
  "Same-Week Scheduling",
  `${COMPANY.yearsInBusiness}+ Years in Business`,
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-steel-950 overflow-hidden pt-16">
      {/* Background — fire-orange radial glow */}
      <div
        className="absolute inset-0 opacity-40 bg-hero-radial"
        aria-hidden="true"
      />
      {/* Grid lines decoration */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-hero-grid"
        aria-hidden="true"
      />

      <div className="relative z-10 container py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Location badge */}
          <ul className="flex items-start gap-2 mb-8">
          {HERO_LOCATIONS.map((location) => (
            <li key={location} className="mb-2">
              <div className="inline-flex items-center gap-2 bg-fire-500/10 border border-fire-500/30 rounded-full px-4 py-1.5">
                <span className="size-2 rounded-full bg-fire-500 animate-pulse" />
                <span className="text-fire-400 text-sm font-semibold">
                  {location}
                </span>
              </div>
            </li>
          ))}
          </ul>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-steel-50 leading-[1.05] mb-6">
            Portland&apos;s Trusted{" "}
            <span className="text-fire-500">Sandblasting</span>
            <br />& Surface Prep Crew
          </h1>

          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl text-steel-400 leading-relaxed max-w-xl mb-10">
            Rust removal, paint stripping &amp; powder coat prep&nbsp;— done right.
            Fast turnaround, guaranteed adhesion, no mess left behind.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-fire-500 hover:bg-fire-600 text-white text-lg font-bold rounded-xl transition-colors shadow-xl shadow-fire-500/25"
            >
              Get Free Estimate
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`mailto:${COMPANY.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-steel-700 text-steel-200 text-lg font-bold rounded-xl hover:border-fire-500 hover:text-fire-400 transition-colors"
            >
              <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {TRUST_SIGNALS.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-steel-400"
              >
                <svg
                  className="size-4 text-fire-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
