import type { ElementType } from 'react'

// Re-export for convenience
export type { ElementType }

// ─── Report (Markdown / gray-matter) ────────────────────────────────────────
export interface ReportImage {
  src: string
  alt: string
}

export interface Report {
  slug: string
  title: string
  date: string        // ISO date string  "YYYY-MM-DD"
  client: string
  location: string
  services: string[]  // keys from SERVICE_SLUGS
  thumbnail: string
  images: ReportImage[]
  video?: string      // YouTube embed URL or local path
  excerpt: string
  tags: string[]
  featured?: boolean
  content: string     // raw markdown body
}

// ─── Navigation ─────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
}

// ─── Service ────────────────────────────────────────────────────────────────
export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: ElementType
  benefits: string[]
}

// ─── Testimonial ────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
  rating: number      // 1–5
}

// ─── FAQ ────────────────────────────────────────────────────────────────────
export interface Faq {
  question: string
  answer: string
}

// ─── Feature / Benefit ──────────────────────────────────────────────────────
export interface Feature {
  benefit: string     // lead with benefit
  feature: string     // follow with feature
  icon: ElementType
}

// ─── How It Works step ──────────────────────────────────────────────────────
export interface Step {
  number: string
  title: string
  description: string
}
