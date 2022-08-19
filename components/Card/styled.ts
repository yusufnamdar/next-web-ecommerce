import styled from 'styled-components'
import { theme } from 'styled-tools'

export const CardContainerStyled = styled.div`
  width: 230px;
  min-width: 230px;
  height: 485px;
  background-color: ${theme('colors.white')};
  border-radius: ${theme('radii.regular')};
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.2s linear;

  img {
    transition: transform 0.2s linear;
  }

  &:hover {
    box-shadow: 0 0 10px 2px ${theme('colors.gray.400')};
    img {
      transform: scale(1.02);
    }
  }
`
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
    color: ${theme('colors.primary.400')};
  }
`
