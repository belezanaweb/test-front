import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import { Bag } from 'pages/Bag'
import { Payment } from 'pages/Payment'
import { Confirmation } from 'pages/Confirmation'

import { Checkout } from 'components/Checkout'

import { theme } from 'utils/theme'
import { CartProvider } from 'context/Cart'

import { GlobalStyles } from './GlobalStyles'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <CartProvider>
            <Routes>
              <Route path="/" element={<Checkout />}>
                <Route index path="/" element={<Bag />} />
                <Route path="payment" element={<Payment />} />
                <Route path="confirmation" element={<Confirmation />} />
              </Route>
            </Routes>
          </CartProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
