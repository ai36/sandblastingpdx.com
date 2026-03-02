import type { MetadataRoute } from 'next'
import { SITE_META } from '@/constants'
import { getAllReports } from '@/lib/reports'

const BASE = SITE_META.url

export default function sitemap(): MetadataRoute.Sitemap {
  const reports = getAllReports()

  const latestDate = reports[0]?.date ? new Date(reports[0].date) : new Date()

  const reportEntries: MetadataRoute.Sitemap = reports.map((report) => ({
    url: `${BASE}/reports/${report.slug}`,
    lastModified: new Date(report.date),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    {
      url: BASE,
      lastModified: latestDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/reports`,
      lastModified: latestDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...reportEntries,
  ]
}
