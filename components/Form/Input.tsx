import { FC, InputHTMLAttributes, ReactNode, MouseEvent } from 'react'
import { LayoutProps } from 'styled-system'
import { noop } from 'utils'
import {
  IconContainerStyled,
  InputStyled,
  InputStyledProps,
  WrapperStyled,
} from './styled'

interface InputProps
  extends Omit<InputStyledProps, 'pr'>,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  icon?: ReactNode
  isIconBg?: boolean
  onClickIcon?(e: MouseEvent<HTMLSpanElement>): void
  height?: LayoutProps['height'] // this is incompatible with InputHTMLAttributes's height, so we need to omit "height" from InputHTMLAttributes
  width?: LayoutProps['width'] // this is incompatible with InputHTMLAttributes's width, so we need to omit "width" from InputHTMLAttributes
  minWidth?: LayoutProps['minWidth']
}

const Input: FC<InputProps> = ({
  variant = 'primary',
  width = 1,
  height = 38,
  minWidth,
  icon,
  onClickIcon = noop,
  isIconBg = false,
  disabled = false,
  ...props
}) => {
  const onClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (disabled) return
    onClickIcon(e)
  }

  return (
    <WrapperStyled width={width} height={height} minWidth={minWidth}>
      <InputStyled
        variant={variant}
        pr={icon ? 60 : 16}
        spellCheck={false}
        autoComplete="off"
        disabled={disabled}
        {...props}
      />
      {icon && (
        <IconContainerStyled
          onClick={onClick}
          variant={variant}
          isIconBg={!disabled && isIconBg}
          disabled={disabled}
        >
          {icon}
        </IconContainerStyled>
      )}
    </WrapperStyled>
  )
}

export { Input }
