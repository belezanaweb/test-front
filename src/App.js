import React from 'react'
import logo from './logo.svg'
import './App.css'

import siteTheme from './theme/theme'
import cssGlobal from './theme/global'

const GlobalStyle = withTheme(({ theme }) => (
  <Global styles={ cssGlobal(theme) } />
))

const App = () => (
  <div className="App">
    <ThemeProvider theme={siteTheme}>
      <GlobalStyle />
    </ThemeProvider>
  </div>
)

export default App
