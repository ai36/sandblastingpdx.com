import Link from 'next/link'
import Image from 'next/image'
import { IconSettings } from '@tabler/icons-react'
import { ServiceBadge, TagBadge } from '@/components/ui/Badge'
import type { Report } from '@/types'

interface Props {
  report: Report
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function ReportCard({ report }: Props) {
  return (
    <Link
      href={`/reports/${report.slug}`}
      className="card card-fire group flex flex-col overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-steel-800">
        {report.thumbnail && report.thumbnail !== '/images/placeholder.jpg' ? (
          <Image
            src={report.thumbnail}
            alt={report.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <IconSettings size={48} strokeWidth={1.25} className="text-steel-600 opacity-40" aria-hidden="true" />
          </div>
        )}
        {report.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold bg-fire-500 text-white">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-steel-500 mb-3">
          <span>{formatDate(report.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{report.location}</span>
          {report.client && (
            <>
              <span aria-hidden="true">·</span>
              <span>{report.client}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-steel-50 group-hover:text-fire-400 transition-colors mb-3 leading-snug line-clamp-2">
          {report.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-steel-400 leading-relaxed flex-1 line-clamp-3 mb-4">
          {report.excerpt}
        </p>

        {/* Services */}
        {report.services.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {report.services.map((s) => (
              <ServiceBadge key={s} slug={s} />
            ))}
          </div>
        )}

        {/* Tags */}
        {report.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {report.tags.slice(0, 4).map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
