import Link, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'

interface NextLinkProps extends LinkProps {
  children?: ReactNode
  disabled?: boolean
  className?: string
}

const NextLink: FC<NextLinkProps> = ({
  children,
  className,
  disabled = false,
  prefetch = false,
  ...props
}) => {
  if (disabled) {
    return <>{children}</>
  }
  return (
    <Link {...props} prefetch={prefetch}>
      <a className={className}>{children}</a>
    </Link>
  )
}

export { NextLink }
