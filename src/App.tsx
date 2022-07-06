import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bag />} />
          <Route path="/payment" element={<></>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
)
