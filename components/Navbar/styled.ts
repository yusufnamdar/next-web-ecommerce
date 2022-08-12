import styled from 'styled-components'
import {
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system'
import { theme, prop } from 'styled-tools'

export const NavStyled = styled.nav`
  padding: 0 24px;
  background-color: ${theme('colors.cyan.900')};
`
export const ToolContainerStyled = styled.div<
  SpaceProps & { onHoverIconColor?: string }
>`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  cursor: pointer;
  ${space}

  :hover {
    & > .material-icons,
    div:first-of-type {
      color: ${prop('onHoverIconColor')};
    }
    background-color: ${theme('colors.cyan.800')};
  }
`

export const MenuStyled = styled.div<PositionProps & LayoutProps>`
  //200,300w, 400 h
  background-color: ${theme('colors.white')};
  border-radius: ${theme('radii.large')};
  ${position}
  ${layout}
`
export const ArrowStyled = styled.span`
  position: absolute;
  top: -18px;
  right: 0;
  transform: rotate(270deg);
`
