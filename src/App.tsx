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
import { Confirmation } from './pages/confirmation/Confirmation'
import { HeaderProvider } from './contexts/HeaderContext'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <HeaderProvider>
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
                <Route path="/confirmation" element={<Confirmation />} />
              </Routes>
            </BrowserRouter>
          </Main>
        </ThemeProvider>
      </BagProvider>
    </HeaderProvider>
  </>
)
