import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ifProp, prop, switchProp, theme } from 'styled-tools'

export interface SkuOptionStyledProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isOutOfStock?: boolean
  value?: string
  type?: OptionType
}

const variants = {
  size: css`
    &::before {
      display: block;
      content: '${prop('value', 'S')}';
      margin-top: 2px;
    }
  `,
  color: css`
    background-color: ${prop('value', '#f8fafc')};
  `,
}

export const SkuOptionStyled = styled.div<SkuOptionStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 32px;
  height: 32px;
  font-size: 13px;
  color: ${theme('colors.gray.400')};
  border: 1px solid ${theme('colors.gray.400')};
  border-radius: ${theme('radii.large')};
  user-select: none;
  cursor: pointer;

  ${switchProp('type', variants)}

  &:hover {
    border: 2px solid ${theme('colors.primary.400')};
    background-color: ${theme('colors.primary.50')};
  }

  ${ifProp(
    'isActive',
    css`
      border: 2px solid ${theme('colors.primary.400')};
      background-color: ${theme('colors.primary.50')};
    `
  )}

  ${ifProp(
    'isOutOfStock',
    css`
      color: ${theme('colors.gray.300')};
      border: 1px solid ${theme('colors.gray.300')};
      background: linear-gradient(
        to top right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) calc(50% - 1px),
        ${theme('colors.gray.300')} 50%,
        rgba(0, 0, 0, 0) calc(50% + 1px),
        rgba(0, 0, 0, 0) 100%
      );

      &:hover {
        background: linear-gradient(
          to top right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0) calc(50% - 1px),
          ${theme('colors.primary.400')} 50%,
          rgba(0, 0, 0, 0) calc(50% + 1px),
          rgba(0, 0, 0, 0) 100%
        );
      }
    `
  )}
`
