import styled, { css } from 'styled-components'
import {
  color,
  ColorProps,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'
import { ifProp, prop } from 'styled-tools'

export type TextStyledProps = {
  whiteSpace?: 'nowrap' | 'break-spaces'
  overflow?: LayoutProps['overflow']
  textOverflow?: 'clip' | 'ellipsis' | 'fade'
  multiLineTextOverflow?: boolean
} & TypographyProps &
  ColorProps &
  SpaceProps

export const TextStyled = styled.div<TextStyledProps>`
  white-space: ${prop('whiteSpace', 'normal')};
  overflow: ${prop('overflow')};
  text-overflow: ${prop('textOverflow')};
  ${ifProp(
    'multiLineTextOverflow',
    css`
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `
  )}
  ${typography}
  ${color}
  ${space}
`
