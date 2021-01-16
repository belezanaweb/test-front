import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import store from './redux/store'
import theme from './ui/theme'
import GlobalStyle from './ui/theme/global-style'
import Layout from './ui/layouts/checkout'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
