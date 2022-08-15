import styled from 'styled-components'
import { theme } from 'styled-tools'
import { themeProp } from 'utils'

export type CategoryContainerStyledProps = { bg: string }

export const CategoryContainerStyled = styled.div<CategoryContainerStyledProps>`
  position: relative;
  width: 80px;
  min-width: 80px;
  padding-bottom: 16px;
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
    height: 4px;
    background-color: ${themeProp('bg', 'colors')};
  }
  &:hover {
    & > div:first-child {
      border: 2px solid ${theme('colors.gray.400')};
    }
    &:after {
      opacity: 1;
    }
  }
`

export const CircleStyled = styled.div<CategoryContainerStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 12px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: ${themeProp('bg', 'colors')};
`
