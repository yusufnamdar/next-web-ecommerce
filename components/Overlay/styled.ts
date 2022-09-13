import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

export type OverlayStyledProps = {
  isExpanded: boolean
  top?: number
  height?: number
}

export const OverlayStyled = styled.div<OverlayStyledProps>`
  position: absolute;
  top: ${prop('top', 0)}px;
  left: 0;
  width: 100%;
  height: ${prop('height', 0)}px;
  z-index: 2;
  background-color: black;
  transition: opacity 0.2s ease-in-out;

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
