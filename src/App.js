import React from 'react'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/glogal'

const App = () => (
  <BrowserRouter>
    <Router />
    <GlobalStyle />
  </BrowserRouter>
)

export default App
