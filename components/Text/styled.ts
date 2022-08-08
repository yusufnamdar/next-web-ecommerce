import styled from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'

export type TextStyledProps = TypographyProps & ColorProps & SpaceProps

export const TextStyled = styled.div<TextStyledProps>`
  ${typography}
  ${color}
  ${space}
`
