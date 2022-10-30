import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppProvider from './hooks'
import Router from './router'
import GlobalStyle from './styles/glogal'

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Router />
      <GlobalStyle />
    </AppProvider>
  </BrowserRouter>
)

export default App
