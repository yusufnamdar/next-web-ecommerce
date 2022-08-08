import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { FC, PropsWithChildren } from 'react'
import { LayoutStyled } from './styled'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutStyled>
      <Navbar />
      {children}
      <Footer />
    </LayoutStyled>
  )
}

export default Layout
