import React from 'react'
import Routes from './routes'
import GlobalStyle from './styles/global'
import { NavBar } from './components/NavBar'

export default () => (
  <>
    <NavBar />
    <GlobalStyle />
    <Routes />
  </>
)
