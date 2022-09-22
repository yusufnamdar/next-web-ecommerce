import styled, { css } from 'styled-components'
import { ifProp, theme } from 'styled-tools'

export const SuggestionStyled = styled.div<{ hasFocus?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  height: 36px;
  padding-left: 16px;
  padding-right: 24px;
  cursor: default;

  ${ifProp(
    'hasFocus',
    css`
      background-color: ${theme('colors.gray.100')};
    `
  )}

  &:hover {
    background-color: ${theme('colors.gray.100')};
  }
`
export const SuggestionMenuStyled = styled.div<{ expanded: boolean }>`
  width: calc(100% + 6px);
  position: absolute;
  top: calc(100% + 3px);
  left: -3px;
  z-index: 3;
  background-color: ${theme('colors.white')};
  border: 1px solid ${theme('colors.gray.200')};
  border-radius: ${theme('radii.regular')};
  transition: max-height 0.1s linear;
  overflow: hidden;
  user-select: none;

  ${ifProp(
    'expanded',
    css`
      display: block;
    `,
    css`
      display: none;
    `
  )}
`
