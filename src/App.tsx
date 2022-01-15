import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import RouterConfig from './navigation/RouterConfig'

import GlobalStyles from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
