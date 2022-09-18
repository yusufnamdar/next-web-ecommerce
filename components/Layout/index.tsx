import Footer from 'components/Footer'
import Header from 'components/Header'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store'
import { hydrateStore } from 'store/middleware'
import { ContainerStyled, LayoutStyled } from './styled'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch() as AppDispatch

  useEffect(() => {
    dispatch(hydrateStore())
  }, [])

  return (
    <LayoutStyled>
      <Header />
      <ContainerStyled>{children}</ContainerStyled>
      <Footer />
    </LayoutStyled>
  )
}

export default Layout
