import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  id?: string
  className?: string
  innerClassName?: string
  children: ReactNode
  /** Alternate (lighter) background — steel-900 */
  alt?: boolean
  /** Remove the top divider line (right after Hero) */
  noDivide?: boolean
  /** Compact padding — for auxiliary/transitional sections */
  compact?: boolean
}

export function SectionWrapper({ id, className, innerClassName, children, alt, noDivide, compact }: Props) {
  return (
    <section
      id={id}
      className={cn(
        compact ? 'py-14 lg:py-16' : 'py-20 lg:py-28',
        alt ? 'bg-steel-900' : 'bg-steel-950',
        !noDivide && 'section-divide',
        className,
      )}
    >
      <div className={cn('container', innerClassName)}>{children}</div>
    </section>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, subtitle, centered, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', centered && 'text-center', className)}>
      {eyebrow && (
        <p className="text-fire-500 text-sm font-bold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-steel-50 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg text-steel-400 max-w-2xl leading-relaxed', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
