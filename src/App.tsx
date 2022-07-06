import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/atoms'
import GlobalStyle from './global/styles/style'
import { defaultTheme } from './global/styles/theme'
import { Bag } from './pages/bag'
import { Payment } from './pages/payment'
import { Main } from './App.style'
import { BagProvider } from './contexts/BagContext'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BagProvider>
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

        <Main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Bag />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </BrowserRouter>
        </Main>
      </ThemeProvider>
    </BagProvider>
  </>
)
