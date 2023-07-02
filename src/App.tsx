import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './global'
import theme from './theme'
import Cart from './pages/Cart'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle
        font={theme.font}
        border={theme.border}
        spacings={theme.spacings}
        colors={theme.colors}
      />
      <Cart />
    </ThemeProvider>
  )
}
