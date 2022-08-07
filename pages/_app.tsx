import { GlobalStyle } from 'components/global'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'theme/provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Namstore - Online Shopping</title>
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
