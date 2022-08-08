import styled from 'styled-components'
import {
  color,
  space,
  layout,
  position,
  flexbox,
  border,
  BorderProps,
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  PositionProps,
} from 'styled-system'

export type BoxStyledProps = SpaceProps &
  ColorProps &
  LayoutProps &
  PositionProps &
  FlexboxProps &
  BorderProps

export const BoxStyled = styled.div<BoxStyledProps>`
  ${color}
  ${space}
  ${layout}
  ${position}
  ${flexbox}
  ${border}
`
