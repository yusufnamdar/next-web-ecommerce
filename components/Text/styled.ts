import styled, { css } from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { ifProp, prop } from 'styled-tools'

export type TextStyledProps = {
  whiteSpace?: 'nowrap' | 'break-spaces'
  textOverflow?: 'clip' | 'ellipsis'
} & TypographyProps &
  ColorProps &
  SpaceProps

export const TextStyled = styled.div<TextStyledProps>`
  white-space: ${prop('whiteSpace', 'normal')};
  ${ifProp(
    'textOverflow',
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ${prop('textOverflow')};
    `
  )}
  ${typography}
  ${color}
  ${space}
`
