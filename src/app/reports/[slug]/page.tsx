import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import { getReportBySlug, getAllReportSlugs } from '@/lib/reports'
import { MediaGallery } from '@/components/reports/MediaGallery'
import { ServiceBadge, TagBadge } from '@/components/ui/Badge'
import { COMPANY, SITE_META } from '@/constants'

interface Props {
  params: Promise<{ slug: string }>
}

// ── Static params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return getAllReportSlugs().map((slug) => ({ slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const report = getReportBySlug(slug)
  if (!report) return {}

  return {
    title: report.title,
    description: report.excerpt,
    openGraph: {
      title: `${report.title} | ${COMPANY.name}`,
      description: report.excerpt,
      url: `${SITE_META.url}/reports/${slug}`,
      images: report.thumbnail ? [{ url: report.thumbnail }] : [],
    },
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function ReportPage({ params }: Props) {
  const { slug } = await params
  const report = getReportBySlug(slug)

  if (!report) notFound()

  const htmlContent = await marked.parse(report.content)

  return (
    <div className="min-h-screen bg-steel-950 pt-16">
      {/* Breadcrumb */}
      <div className="bg-steel-900 border-b border-steel-800">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-steel-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-fire-400 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/reports" className="hover:text-fire-400 transition-colors">
              Work Reports
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-steel-300 truncate max-w-xs">{report.title}</span>
          </nav>
        </div>
      </div>

      <div className="container py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            {/* Services */}
            {report.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {report.services.map((s) => (
                  <ServiceBadge key={s} slug={s} />
                ))}
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-50 leading-tight mb-6">
              {report.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-steel-400 pb-6 border-b border-steel-800">
              <div className="flex items-center gap-1.5">
                <svg className="size-4 text-fire-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {formatDate(report.date)}
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="size-4 text-fire-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {report.location}
              </div>
              {report.client && (
                <div className="flex items-center gap-1.5">
                  <svg className="size-4 text-fire-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  {report.client}
                </div>
              )}
            </div>
          </header>

          {/* Excerpt */}
          {report.excerpt && (
            <p className="text-xl text-steel-300 leading-relaxed mb-10 font-medium">
              {report.excerpt}
            </p>
          )}

          {/* Media gallery */}
          {(report.images.length > 0 || report.video) && (
            <section className="mb-12" aria-label="Project photos and video">
              <h2 className="text-sm font-bold uppercase tracking-widest text-steel-500 mb-4">
                Project Photos &amp; Video
              </h2>
              <MediaGallery images={report.images} video={report.video} />
            </section>
          )}

          {/* Content */}
          {report.content.trim() && (
            <section className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-steel-500 mb-4">
                Project Details
              </h2>
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </section>
          )}

          {/* Tags */}
          {report.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-6 border-t border-steel-800">
              {report.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}

          {/* Back + CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-steel-800">
            <Link
              href="/reports"
              className="flex items-center gap-2 text-sm text-steel-400 hover:text-fire-400 transition-colors font-medium"
            >
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Work Reports
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fire-500 hover:bg-fire-600 text-white font-bold rounded-xl transition-colors text-sm"
            >
              Get a Quote Like This
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
