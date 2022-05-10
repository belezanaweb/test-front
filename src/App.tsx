import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartDetailsProvider } from './hooks/useCartDetails'

import Routes from './routes'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

const App = () => (
  <>
    <Router>
      <CartDetailsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </CartDetailsProvider>
    </Router>
  </>
)

export default App
