import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/atoms'
import GlobalStyle from './global/styles/style'
import { defaultTheme } from './global/styles/theme'
import { Bag } from './pages/bag'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={defaultTheme}>
      <Header
        items={[
          {
            label: 'sacola'
          },
          {
            label: 'pagamento'
          },
          {
            label: 'confirmação'
          }
        ]}
      />
      <Bag />
    </ThemeProvider>
  </>
)
