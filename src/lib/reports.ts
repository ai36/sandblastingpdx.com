import { cache } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Report } from '@/types'

const REPORTS_DIR = path.join(process.cwd(), 'content', 'reports')

function parseReport(filePath: string): Report {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  const filename = path.basename(filePath, '.md')

  return {
    slug: (data.slug as string) || filename,
    title: (data.title as string) || '',
    date: (data.date as string) || '',
    client: (data.client as string) || '',
    location: (data.location as string) || '',
    services: (data.services as string[]) || [],
    thumbnail: (data.thumbnail as string) || '/images/placeholder.jpg',
    images: (data.images as Report['images']) || [],
    video: data.video as string | undefined,
    excerpt: (data.excerpt as string) || '',
    tags: (data.tags as string[]) || [],
    featured: (data.featured as boolean) || false,
    content,
  }
}

export const getAllReports = cache(function getAllReports(): Report[] {
  if (!fs.existsSync(REPORTS_DIR)) return []

  const files = fs
    .readdirSync(REPORTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.join(REPORTS_DIR, f))

  return files
    .map(parseReport)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

export function getFeaturedReports(limit = 3): Report[] {
  return getAllReports()
    .filter((r) => r.featured)
    .slice(0, limit)
}

export const getReportBySlug = cache(function getReportBySlug(slug: string): Report | null {
  if (!fs.existsSync(REPORTS_DIR)) return null

  const files = fs
    .readdirSync(REPORTS_DIR)
    .filter((f) => f.endsWith('.md'))

  const match = files.find((f) => {
    const filePath = path.join(REPORTS_DIR, f)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(raw)
    return (data.slug as string) === slug || f.replace('.md', '') === slug
  })

  if (!match) return null
  return parseReport(path.join(REPORTS_DIR, match))
})

export function getAllReportSlugs(): string[] {
  return getAllReports().map((r) => r.slug)
}
