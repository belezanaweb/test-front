import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <div className="App">Boa sorte! 🚀</div>
    </ThemeProvider>
  )
}

export default App
