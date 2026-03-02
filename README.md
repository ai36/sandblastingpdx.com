# Sand Blasting PDX

Business website for **SandblastingPDX** — Portland, OR & Vancouver, WA - [https://sandblastingpdx.vercel.app](https://sandblastingpdx.vercel.app/?utm_source=github&utm_medium=readme)

## Stack

- **Next.js 15** (App Router, `src/` dir, SSR)
- **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config in `globals.css`)
- **Zustand 5** (UI state: mobile menu, lightbox)
- **gray-matter** (markdown frontmatter parsing)
- **marked** (markdown → HTML)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Landing page
│   ├── reports/          # Portfolio list + detail
│   └── contact/          # Contact form
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Landing page sections
│   ├── reports/          # ReportCard, MediaGallery (lightbox)
│   └── ui/               # Button, Badge, SectionWrapper
├── constants/index.ts    # All site data (company info, services, FAQs…)
├── store/index.ts        # Zustand UI store
├── lib/reports.ts        # gray-matter report parser
└── types/index.ts        # TypeScript types

content/reports/          # Markdown work reports (frontmatter + body)
public/images/            # Static images
```

## Adding Work Reports

Create a new `.md` file in `content/reports/`:

```markdown
---
title: "Job Title Here"
date: "2025-01-15"
slug: "unique-slug-here"
client: "Client Name or Private Owner"
location: "Portland, OR"
services:
  - rust-removal
  - powder-coating-prep
thumbnail: "/images/reports/your-job/thumb.jpg"
images:
  - src: "/images/reports/your-job/before.jpg"
    alt: "Descriptive alt text"
  - src: "/images/reports/your-job/after.jpg"
    alt: "Descriptive alt text"
video: ""
excerpt: "One-paragraph summary shown in the report card."
tags:
  - automotive
  - rust-removal
featured: false
---

Full markdown description of the job goes here.
```

Available service slugs: `rust-removal`, `paint-removal`, `powder-coating-prep`, `mobile-blasting`
