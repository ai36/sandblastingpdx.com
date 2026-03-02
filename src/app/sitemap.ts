import type { MetadataRoute } from 'next'
import { SITE_META } from '@/constants'
import { getAllReportSlugs } from '@/lib/reports'

const BASE = SITE_META.url

export default function sitemap(): MetadataRoute.Sitemap {
  const reportEntries: MetadataRoute.Sitemap = getAllReportSlugs().map((slug) => ({
    url: `${BASE}/reports/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    {
      url: BASE,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/contact`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/reports`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...reportEntries,
  ]
}
