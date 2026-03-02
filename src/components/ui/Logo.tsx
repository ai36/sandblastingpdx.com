import Image from 'next/image'
import Link from 'next/link'

interface Props {
  className?: string
  linkClassName?: string
  onClick?: () => void
}

export function Logo({ className, linkClassName, onClick }: Props) {
  return (
    <Link href="/" className={linkClassName} onClick={onClick}>
      <Image
        src="/logo.svg"
        alt="SandblastingPDX"
        width={1303}
        height={152}
        className={className}
        priority
      />
    </Link>
  )
}
