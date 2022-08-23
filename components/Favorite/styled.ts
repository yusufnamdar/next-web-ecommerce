import styled from 'styled-components'
import { theme } from 'styled-tools'

export const FavoriteCircleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${theme('colors.white')};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${theme('colors.rose.400')};
  }
`
