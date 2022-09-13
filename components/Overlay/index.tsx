import { useRouter } from 'next/router'
import { FC, useEffect, useRef } from 'react'
import { OverlayStyled, OverlayStyledProps } from './styled'

const Overlay: FC<OverlayStyledProps> = ({
  isExpanded = false,
  top,
  ...props
}) => {
  const router = useRouter()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight || 0
    const overlay = overlayRef.current
    if (overlay) {
      const overlayHeight = top
        ? `${scrollHeight - top}px`
        : `${scrollHeight}px`
      overlay.style.height = overlayHeight
    }
  }, [router.asPath])

  return (
    <OverlayStyled
      isExpanded={isExpanded}
      top={top}
      {...props}
      ref={overlayRef}
    />
  )
}

export { Overlay }
