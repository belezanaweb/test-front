import { ThemeProvider } from 'styled-components'

import { CheckoutProvider } from './stores'
import { Router } from './routes'
import { GlobalStyle, theme } from './styles'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <CheckoutProvider>
        <Router />
      </CheckoutProvider>
    </ThemeProvider>
  )
}

export default App
