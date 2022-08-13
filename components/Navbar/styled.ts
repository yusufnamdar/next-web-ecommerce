import styled, { css } from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'
import { theme, prop, switchProp } from 'styled-tools'

export const NavStyled = styled.nav`
  padding: 0 24px;
  background-color: ${theme('colors.cyan.900')};
`

type ToolContainerStyledProps = SpaceProps & { onHoverIconColor?: string }

export const ToolContainerStyled = styled.div<ToolContainerStyledProps>`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  cursor: pointer;
  ${space}

  &:hover {
    .toolbar-menu {
      display: block;
    }
    & > .material-icons,
    & > div:first-of-type {
      color: ${prop('onHoverIconColor')};
    }
  }
`
const variants = {
  bottomCenter: css`
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
  bottomRight: css`
    top: calc(100% - 10px);
    right: 0;
    & > span {
      position: absolute;
      bottom: calc(100% - 8px);
      right: 0;
      transform: rotate(270deg) translateY(-100%) scaleY(1.6);
    }
  `,
}

export interface MenuStyledProps extends LayoutProps {
  variant: 'bottomCenter' | 'bottomRight'
}

export const MenuStyled = styled.div<MenuStyledProps>`
  display: none;
  position: absolute;
  z-index: 1;
  box-shadow: 0 4px 16px 0 ${theme('colors.gray.300')};
  background-color: ${theme('colors.panel')};
  border-radius: ${theme('radii.large')};
  ${switchProp('variant', variants)}
  ${layout}
`
