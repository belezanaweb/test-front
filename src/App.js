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
  height: 100%;
  width: 100%;

  @media screen and (max-device-width: 1680px){
  margin: 0;
  padding: 0;
  background-color: #EEE;
  height: 100%;
  width: 100%;


  }
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
