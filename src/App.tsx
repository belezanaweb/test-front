import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartDetailsProvider } from './hooks/useCartDetails'

import Routes from './routes'
import GlobalStyle from './styles/global'

const App = () => (
  <>
    <Router>
      <CartDetailsProvider>
        <GlobalStyle />
        <Routes />
      </CartDetailsProvider>
    </Router>
  </>
)

export default App
