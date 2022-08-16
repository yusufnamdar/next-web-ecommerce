import Footer from 'components/Footer'
import Header from 'components/Header'
import { FC, PropsWithChildren } from 'react'
import { ContainerStyled, LayoutStyled } from './styled'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <ContainerStyled>{children}</ContainerStyled>
      <Footer />
    </LayoutStyled>
  )
}

export default Layout
