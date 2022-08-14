import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'

export type CategoryContainerStyledProps = { bg: string }

export const CategoryContainerStyled = styled.div<CategoryContainerStyledProps>`
  position: relative;
  padding: 0 8px 16px 8px;
  cursor: pointer;
  user-select: none;
  &:after {
    display: block;
    position: absolute;
    content: '';
    opacity: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, bg }) =>
      theme.colors[bg.split('.')[0]][bg.split('.')[1]]};
  }
  &:hover:after {
    opacity: 1;
  }
`

export const CircleStyled = styled.div<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  ${color}
`
