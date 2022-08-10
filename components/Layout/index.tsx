import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { FC, PropsWithChildren } from 'react'
import { ContainerStyled, LayoutStyled } from './styled'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutStyled>
      <ContainerStyled>
        <Navbar />
        {children}
        <Footer />
      </ContainerStyled>
    </LayoutStyled>
  )
}

export default Layout
