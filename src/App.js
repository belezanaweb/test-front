import React from 'react'
import CRouter from './routes'
import { TransactionProvider } from './core/store/Context'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global.style'
import { theme } from './styles/light.theme.style'

const App = () => (
  <div className="App">
    <TransactionProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CRouter />
      </ThemeProvider>
    </TransactionProvider>
  </div>
)

export default App
