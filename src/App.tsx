import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { Checkout } from 'components'
import { GlobalStyle, Wrapper } from './styles/global'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Checkout />
      </Wrapper>
    </ThemeProvider>
  </QueryClientProvider>
)

export default App
