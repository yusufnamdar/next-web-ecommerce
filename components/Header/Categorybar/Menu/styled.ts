import styled, { css } from 'styled-components'
import { ifProp, switchProp, theme } from 'styled-tools'
import { themeProp } from 'utils'

type MenuStyledProps = { isExpanded?: boolean }

export const MenuStyled = styled.div<MenuStyledProps>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  padding: 24px;
  width: 100%;
  height: 320px;
  background-color: ${theme('colors.white')};
  border-radius: ${theme('radii.small')};
  box-shadow: inset 0 0 1px 1px #ebebeb;
  transition: opacity 0.1s ease-in-out;

  ${ifProp(
    'isExpanded',
    css`
      visibility: visible;
      opacity: 1;
    `,
    css`
      visibility: hidden;
      opacity: 0;
    `
  )}
`
export interface MenuLinkStyledProps {
  variant?: 'title' | 'regular'
  mb?: number
}

export const MenuLinkStyled = styled.a<MenuLinkStyledProps>`
  display: block;
  width: min-content;
  margin-bottom: ${themeProp('mb', 'space')}px;
  white-space: nowrap;
  transition: color 0.2s ease-in-out;

  ${switchProp('variant', {
    regular: css`
      color: ${theme('colors.gray.400')};
      font-size: 13px;
      font-weight: ${theme('fontWeights.regular')};

      &:hover {
        color: ${theme('colors.primary.600')};
        text-decoration: underline;
      }
    `,
    title: css`
      color: ${theme('colors.text')};
      font-size: 15px;
      font-weight: ${theme('fontWeights.semi-bold')};

      &:hover {
        color: ${theme('colors.primary.600')};
        text-decoration: underline;
      }
    `,
  })}
`
export const OverlayStyled = styled.div<{ isExpanded: boolean }>`
  position: absolute;
  top: 193px;
  left: 0;
  width: 100%;
  height: 3500px;
  z-index: 2;
  background-color: black;
  transition: visibility 0.1s 0s, opacity 0.1s ease-in-out;

  ${ifProp(
    'isExpanded',
    css`
      visibility: visible;
      opacity: 0.6;
    `,
    css`
      visibility: hidden;
      opacity: 0;
    `
  )}
`
