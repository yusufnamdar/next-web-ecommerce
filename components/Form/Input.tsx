import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { ColorProps, LayoutProps } from 'styled-system'
import {
  IconContainerStyled,
  InputStyled,
  InputStyledProps,
  WrapperStyled,
} from './styled'

interface InputProps
  extends Omit<InputStyledProps, 'pr'>,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'width' | 'height'> {
  variant?: string
  icon?: ReactNode
  iconBg?: ColorProps['bg']
  height?: LayoutProps['height'] // this is incompatible with InputHTMLAttributes's height, so we need to omit "height" from InputHTMLAttributes
  width?: LayoutProps['width'] // this is incompatible with InputHTMLAttributes's width, so we need to omit "width" from InputHTMLAttributes
  minWidth?: LayoutProps['minWidth']
}

const Input: FC<InputProps> = ({
  variant = 'primary',
  width = 1,
  height = 38,
  minWidth,
  borderRadius = 'regular',
  iconBg = 'blue',
  icon,
  ...props
}) => {
  return (
    <WrapperStyled
      width={width}
      height={height}
      minWidth={minWidth}
      borderRadius={borderRadius}
    >
      <InputStyled
        variant={variant}
        borderRadius={borderRadius}
        pr={icon ? 60 : 16}
        spellCheck={false}
        autoComplete="off"
        {...props}
      />
      {icon && <IconContainerStyled bg={iconBg}>{icon}</IconContainerStyled>}
    </WrapperStyled>
  )
}

export default Input
