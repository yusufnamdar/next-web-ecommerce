import styled, { css } from 'styled-components'
import { ifProp, theme } from 'styled-tools'

export type OptionStyledProps = { isActive?: boolean }

const variants = {
  size: css``,
  color: css``,
}

export const OptionStyled = styled.div<OptionStyledProps>`
  padding: 5px 10px;
  font-size: 13px;
  border: 1px solid ${theme('gray.400')};
  border-radius: ${theme('radii.large')};
  user-select: none;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme('primary.400')};
    background-color: ${theme('colors.primary.50')};
  }

  ${ifProp(
    'isActive',
    css`
      border: 2px solid ${theme('primary.400')};
      background-color: ${theme('colors.primary.50')};
    `
  )}
`
