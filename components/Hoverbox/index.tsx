import { Icon } from 'components/Icon'
import { FC, ReactNode, useState, useEffect, MouseEvent } from 'react'
import { noop } from 'utils'
import {
  HoverboxContainerStyled,
  HoverboxContainerStyledProps,
  HoverboxStyled,
  HoverboxStyledProps,
} from './styled'

export interface HoverboxProps
  extends HoverboxStyledProps,
    HoverboxContainerStyledProps {
  children?: ReactNode
  content?: ReactNode
  controlVisibility?: boolean
  toggleVisibility?(visible: boolean): void
}

const Hoverbox: FC<Omit<HoverboxProps, 'onMouseOver'>> = ({
  children,
  colorOnHover,
  content,
  variant = 'arrowBottomCenter',
  width,
  isVisible = false,
  controlVisibility = false,
  toggleVisibility = noop,
  onMouseEnter = noop,
  onMouseLeave = noop,
  ...props
}) => {
  const [show, setShow] = useState(isVisible)

  useEffect(() => {
    if (controlVisibility) {
      setShow(isVisible)
    }
  }, [isVisible])

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    onMouseEnter(e)
    if (controlVisibility) {
      toggleVisibility(true)
      return
    }
    setShow(true)
  }

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    onMouseLeave(e)
    if (controlVisibility) {
      toggleVisibility(false)
      return
    }
    setShow(false)
  }

  return (
    <HoverboxContainerStyled
      isVisible={show}
      colorOnHover={colorOnHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      {!!content && (
        <HoverboxStyled className="hover-box" variant={variant} width={width}>
          {content}
          {variant.startsWith('arrow') && (
            <span>
              <Icon name="play_arrow" color="panel" size={18} />
            </span>
          )}
        </HoverboxStyled>
      )}
    </HoverboxContainerStyled>
  )
}

export { Hoverbox }
