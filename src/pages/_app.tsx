import { AppProps /*, AppContext */ } from "next/app"
import App from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

/* const MyApp  = ({ Component, pageProps }: AppProps)  => {
  return <Component {...pageProps} />
}

export default MyApp */

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider >
    )
  }
}
