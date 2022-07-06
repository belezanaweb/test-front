import React, { lazy, Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/atoms'
import GlobalStyle from './global/styles/style'
import { defaultTheme } from './global/styles/theme'
import { BagProvider } from './contexts/BagContext'
import { HeaderProvider } from './contexts/HeaderContext'
import { PaymentFormProvider } from './contexts/PaymentFormContext'
import { Main } from './App.style'
import { PageSkeleton } from './components/molecules'

const Bag = lazy(() => import('./pages/bag'))
const Payment = lazy(() => import('./pages/payment'))
const Confirmation = lazy(() => import('./pages/confirmation'))

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
              <Suspense fallback={<PageSkeleton />}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Bag />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                  </Routes>
                </BrowserRouter>
              </Suspense>
            </Main>
          </PaymentFormProvider>
        </BagProvider>
      </ThemeProvider>
    </HeaderProvider>
  </>
)
