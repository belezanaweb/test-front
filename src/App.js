import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/theme'

import { Button } from './components/Button'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button>dasdas</Button>
    </ThemeProvider>
  )
}

export default App
