import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'

import { CartContextProvider } from './hooks/useCart'
import { CheckoutRoutes } from './routes'
import GlobalStyles from './styles/global'

const App = () => (
  <Router>
    <GlobalStyles />
    <CartContextProvider>
      <Layout>
        <CheckoutRoutes />
      </Layout>
    </CartContextProvider>
  </Router>
)

export default App
