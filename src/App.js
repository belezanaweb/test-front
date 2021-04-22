import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import HeaderCheckout from './Components/HeaderCheckout'
import Routes from './Routes'
import GlobalStyle from './styles/global'

const App = () => (
  <BrowserRouter>
    <HeaderCheckout />
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
)

export default App
