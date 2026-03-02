import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { SERVICES } from '@/constants'

const SERVICE_LABEL: Record<string, string> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s.shortTitle]),
)

const serviceBadgeVariants = cva(
  'inline-block px-3 py-1 text-xs font-semibold rounded-full border',
  {
    variants: {
      color: {
        fire: 'bg-fire-500/15 text-fire-400 border-fire-500/30',
      },
    },
    defaultVariants: { color: 'fire' },
  },
)

interface ServiceBadgeProps extends VariantProps<typeof serviceBadgeVariants> {
  slug: string
  className?: string
}

export function ServiceBadge({ slug, className }: ServiceBadgeProps) {
  const label = SERVICE_LABEL[slug] ?? slug
  return (
    <span className={cn(serviceBadgeVariants(), className)}>
      {label}
    </span>
  )
}

const tagBadgeVariants = cva(
  'inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-steel-800 text-steel-400',
)

interface TagBadgeProps {
  tag: string
  className?: string
}

export function TagBadge({ tag, className }: TagBadgeProps) {
  return (
    <span className={cn(tagBadgeVariants(), className)}>
      #{tag}
    </span>
  )
}
