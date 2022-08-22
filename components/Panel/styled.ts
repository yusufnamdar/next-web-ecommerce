import { Box } from 'components/Box'
import styled from 'styled-components'
import { theme } from 'styled-tools'

export const PanelStyled = styled(Box)`
  box-shadow: 0 0 10px 1px ${theme('colors.gray.300')};
  border: 1px solid ${theme('colors.gray.300')};
  background-color: ${theme('colors.panel')};
  border-radius: ${theme('radii.large')};
`
