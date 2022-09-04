import { Icon } from 'components/Icon'
import { FC, ReactNode } from 'react'
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
}

const Hoverbox: FC<HoverboxProps> = ({
  children,
  colorOnHover,
  content,
  variant = 'arrowBottomCenter',
  width,
  ...props
}) => {
  return (
    <HoverboxContainerStyled colorOnHover={colorOnHover} {...props}>
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
