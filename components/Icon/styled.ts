import styled from 'styled-components'
import { color, ColorProps, typography, TypographyProps } from 'styled-system'
import { prop } from 'styled-tools'

export interface IconStyledProps extends ColorProps, TypographyProps {
  cursor?: string
}

export const IconStyled = styled.span<IconStyledProps>`
  display: inline-block;
  user-select: none;
  overflow: hidden;
  cursor: ${prop('cursor', 'inherit')};
  ${typography}
  ${color}
`
