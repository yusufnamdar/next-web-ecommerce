import styled, { css } from 'styled-components'
import {
  border,
  color,
  layout,
  BorderProps,
  ColorProps,
  LayoutProps,
} from 'styled-system'
import { prop, theme } from 'styled-tools'

export interface InputStyledProps extends BorderProps {
  variant?: string
  pr?: number
}

// const variantStyle = (variant: string, custom?: string) => css`
//   border: 2px solid ${custom || theme(`colors.${variant}`)};
// `

export const WrapperStyled = styled.div<LayoutProps & BorderProps>`
  position: relative;
  overflow: hidden;
  ${border}
  ${layout}
`

export const InputStyled = styled.input<InputStyledProps>`
  width: 100%;
  height: 100%;
  font-size: 15px;
  padding-left: 16px;
  padding-right: ${prop('pr')}px;
  font-family: ${theme('fonts.ibm')};
  border: none;
  ${border}
`
export const IconContainerStyled = styled.span<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  width: 45px;
  top: 0;
  right: 0;
  bottom: 0;
  ${color}
`
