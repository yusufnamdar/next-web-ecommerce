import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { layout, LayoutProps } from 'styled-system'
import { prop, theme, switchProp, ifProp } from 'styled-tools'

export type HoverboxContainerStyledProps = {
  colorOnHover?: string
  isVisible?: boolean
} & HTMLAttributes<HTMLDivElement>

export const HoverboxContainerStyled = styled.div<HoverboxContainerStyledProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  height: 100%;
  cursor: pointer;

  ${ifProp(
    'isVisible',
    css`
      .hover-box {
        visibility: visible;
      }
      & > *:not(.hover-box) {
        transition: color 0.2s ease-in-out;
        color: ${prop('colorOnHover')};
      }
    `
  )}
`

const variants = {
  arrowBottomCenter: css`
    top: calc(100% - 10px);
    right: 50%;
    transform: translateX(50%);
    & > span {
      position: absolute;
      bottom: calc(100% - 8px);
      right: 50%;
      transform: rotate(270deg) translateY(50%) scaleY(1.6);
    }
  `,
  arrowBottomRight: css`
    top: calc(100% - 10px);
    right: 0;
    & > span {
      position: absolute;
      bottom: calc(100% - 8px);
      right: 0;
      transform: rotate(270deg) translateY(-50%) scaleY(1.6);
    }
  `,
  bottomCenter: css`
    top: 100%;
    right: 50%;
    transform: translateX(50%);
  `,
  bottomRight: css`
    top: 100%;
    right: 0;
  `,
  bottomLeft: css`
    top: 100%;
    left: 0;
  `,
}

export interface HoverboxStyledProps extends LayoutProps {
  variant?:
    | 'bottomCenter'
    | 'bottomRight'
    | 'bottomLeft'
    | 'arrowBottomCenter'
    | 'arrowBottomRight'
}

export const HoverboxStyled = styled.div<HoverboxStyledProps>`
  display: block;
  visibility: hidden;
  position: absolute;
  cursor: auto;
  z-index: 99;
  box-shadow: 0 0 20px 0 ${theme('colors.gray.400')};
  background-color: ${theme('colors.panel')};
  border-radius: ${theme('radii.large')};
  ${switchProp('variant', variants)}
  ${layout}
`
