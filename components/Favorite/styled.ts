import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { border, BorderProps, position, PositionProps } from 'styled-system'
import { prop, theme } from 'styled-tools'
import { themeProp } from 'utils'

export type FavoriteCircleStyledProps = {
  size?: number
} & PositionProps &
  BorderProps &
  HTMLAttributes<HTMLDivElement>

export const FavoriteCircleStyled = styled.div<FavoriteCircleStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${prop('size', '44')}px;
  height: ${prop('size', '44')}px;
  border-radius: ${themeProp('borderRadius', 'radii')};
  background-color: ${theme('colors.white')};
  box-shadow: 0 1px 4px #0000000d;
  transition: color 0.2s ease-in-out;
  ${position}
  ${border}
  
  &:hover .material-icons {
    color: ${theme('colors.rose.400')};
  }
`
