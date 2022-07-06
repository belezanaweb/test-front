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
import { Confirmation } from './pages/confirmation'
import { HeaderProvider } from './contexts/HeaderContext'
import { PaymentFormProvider } from './contexts/PaymentFormContext'

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <HeaderProvider>
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

        <BagProvider>
          <PaymentFormProvider>
            <Main>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Bag />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
              </BrowserRouter>
            </Main>
          </PaymentFormProvider>
        </BagProvider>
      </ThemeProvider>
    </HeaderProvider>
  </>
)
