import type { Metadata } from 'next'
import { IconSettings } from '@tabler/icons-react'
import { getAllReports } from '@/lib/reports'
import { ReportCard } from '@/components/reports/ReportCard'
import { COMPANY, SITE_META } from '@/constants'

export const metadata: Metadata = {
  title: 'Work Reports & Project Portfolio',
  description: `Browse completed sandblasting, rust removal, and powder coat prep jobs by ${COMPANY.name} in Portland OR and Vancouver WA. Photos, videos, and project details.`,
  openGraph: {
    title: `Work Reports | ${COMPANY.name}`,
    description: `Real jobs, real results. Browse our project portfolio — surface prep in Portland, Vancouver WA, and the Pacific Northwest.`,
    url: `${SITE_META.url}/reports`,
  },
}

export default function ReportsPage() {
  const reports = getAllReports()

  return (
    <div className="min-h-screen bg-steel-950 pt-16">
      {/* Page header */}
      <div className="bg-steel-900 border-b border-steel-800">
        <div className="container py-16 lg:py-20">
          <p className="text-fire-500 text-sm font-bold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-steel-50 mb-4">
            Work Reports
          </h1>
          <p className="text-lg text-steel-400 max-w-2xl leading-relaxed">
            Real jobs, real results. Every report includes photos, service details,
            and a brief description of the work — so you know exactly what you&apos;re
            getting when you hire us.
          </p>
          <p className="mt-3 text-sm text-steel-600">
            {reports.length} {reports.length === 1 ? 'project' : 'projects'} documented
          </p>
        </div>
      </div>

      {/* Reports grid */}
      <div className="container py-12 lg:py-16">
        {reports.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <ReportCard key={report.slug} report={report} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <IconSettings size={56} strokeWidth={1.25} className="text-steel-600 mx-auto mb-6" aria-hidden="true" />
            <p className="text-lg text-steel-400">
              Work reports coming soon. Check back shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
