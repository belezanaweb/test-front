import React from 'react'
import Router from './routers/Router'
import './App.css'
import GlobalState from './global/globalState'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  background-color: #EEE;
  height: 100vh;
}
`

const App = () => {
  return (
    <GlobalState>
      <GlobalStyle />
      <Router />
    </GlobalState>
  )
}

export default App
