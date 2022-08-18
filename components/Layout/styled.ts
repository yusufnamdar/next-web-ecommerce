import styled from 'styled-components'

export const LayoutStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-grow: 1; //this makes the page component's height take as much space as possible.
`
