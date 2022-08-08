import { GlobalStyle } from 'components/global'
import { ThemeProvider } from 'theme/provider'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Namstore - Online Shopping</title>
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
