import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire-500 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-fire-500 text-white hover:bg-fire-600 active:bg-fire-700 shadow-lg shadow-fire-500/20',
        outline: 'border border-fire-500 text-fire-400 hover:bg-fire-500 hover:text-white',
        ghost: 'text-steel-300 hover:text-steel-50 hover:bg-steel-800',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type BaseProps = VariantProps<typeof buttonVariants> & { className?: string }

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }
type Props = ButtonProps | AnchorProps

export function Button({ variant, size, className, as, ...props }: Props) {
  const cls = cn(buttonVariants({ variant, size }), className)

  if (as === 'a') {
    return <a className={cls} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />
  }

  return <button className={cls} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />
}
