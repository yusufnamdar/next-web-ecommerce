import { Box } from 'components/Box'
import { theme } from 'styled-tools'
import styled from 'styled-components'

export const SlideBoxStyled = styled(Box)`
  cursor: pointer;

  .material-icons {
    transform: scaleX(1.6);
  }

  &:hover .material-icons {
    color: ${theme('colors.primary.400')};
  }
`
