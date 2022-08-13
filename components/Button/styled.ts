import styled, { css } from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'
import { switchProp, theme, prop } from 'styled-tools'

const variants = {
  fill: css`
    border: none;
    background-color: ${theme('colors.primary.400')};
    color: ${theme('colors.white')};
    &:hover {
      background-color: ${theme('colors.primary.300')};
    }
    &:disabled {
      background-color: ${theme('colors.gray.300')};
      cursor: not-allowed;
    }
  `,
  outline: css`
    border: 2px solid ${theme('colors.primary.400')};
    background-color: ${theme('colors.white')};
    color: ${theme('colors.gray.400')};
    &:hover {
      background-color: ${theme('colors.primary.50')};
    }
    &:disabled {
      background-color: ${theme('colors.gray.200')};
      border-color: ${theme('colors.gray.300')};
      cursor: not-allowed;
    }
  `,
}

export interface ButtonStyledProps extends LayoutProps, SpaceProps {
  variant?: 'fill' | 'outline'
  fontSize?: number
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 0 20px;
  font-weight: ${theme('fontWeights.semi-bold')};
  font-size: ${prop('fontSize', '16')}px;
  border-radius: ${theme('radii.large')};
  cursor: pointer;
  ${layout}
  ${space}
  ${switchProp('variant', variants)}
`
