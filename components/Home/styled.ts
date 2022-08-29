import styled, { css } from 'styled-components'
import { ifProp, prop, theme } from 'styled-tools'

interface AnnouncementContainerStyledProps {
  height?: number
  isActive: boolean
}

export const AnnouncementContainerStyled = styled.div<AnnouncementContainerStyledProps>`
  position: absolute;
  left: 0;
  right: 0;
  height: ${prop('height', '0')}px;
  opacity: 0;
  z-index: 0;
  transform: translateY(-30px);
  transition: opacity 0.2s linear;

  ${ifProp(
    'isActive',
    css`
      z-index: 1;
      opacity: 1;
    `
  )}
`

export const AnnouncementStyled = styled.div`
  width: 100%;
  max-width: 1204px;
  height: 366px;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid white;
  border-radius: ${theme('radii.large')};
  overflow: hidden;
  transform: translate(-50%, -50%);
  box-shadow: 0 6px 30px 1px rgb(0 0 0 / 16%);
`
export const SlideStyled = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 44px;
  height: 54px;
  cursor: pointer;
  border-radius: ${theme('radii.regular')};
  border: 1px solid black;
  overflow: hidden;
  transition: transform 0.2s linear;

  :active {
    transform: scale(1.2);
  }

  ${ifProp(
    'isActive',
    css`
      transform: scale(1.2);
    `
  )}
`
