import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { ButtonStyled, ButtonStyledProps } from './styled'

interface ButtonProps
  extends ButtonStyledProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({
  variant = 'fill',
  height = 48,
  children,
  ...props
}) => {
  return (
    <ButtonStyled variant={variant} height={height} {...props}>
      {children}
    </ButtonStyled>
  )
}

export { Button }
