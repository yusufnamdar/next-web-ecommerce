import { HTMLAttributes } from 'react'
import { prop } from 'styled-tools'
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

export type BoxStyledProps = { gap?: number } & SpaceProps &
  ColorProps &
  LayoutProps &
  PositionProps &
  FlexboxProps &
  BorderProps &
  HTMLAttributes<HTMLDivElement>

export const BoxStyled = styled.div<BoxStyledProps>`
  gap: ${prop('gap')}px;
  ${color}
  ${space}
  ${layout}
  ${position}
  ${flexbox}
  ${border}
`
