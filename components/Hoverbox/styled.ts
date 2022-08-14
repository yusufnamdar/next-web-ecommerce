import styled, { css } from 'styled-components'
import { layout, LayoutProps } from 'styled-system'
import { prop, theme, switchProp } from 'styled-tools'

export type HoverboxContainerStyledProps = {
  onHoverColor?: string
}

export const HoverboxContainerStyled = styled.div<HoverboxContainerStyledProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  height: 100%;
  cursor: pointer;

  &:hover {
    .hover-box {
      display: block;
    }
    & > * {
      color: ${prop('onHoverColor')};
    }
  }
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
  display: none;
  position: absolute;
  z-index: 1;
  box-shadow: 0 4px 16px 0 ${theme('colors.gray.300')};
  background-color: ${theme('colors.panel')};
  border-radius: ${theme('radii.large')};
  ${switchProp('variant', variants)}
  ${layout}
`
