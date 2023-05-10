import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './utils/theme'
import { Bag } from './pages/Bag'
import { Payment } from './pages/Payment'
import { Confirmation } from './pages/Confirmation'
import { Checkout } from './components/Checkout'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<Checkout />}>
            <Route index path="/" element={<Bag />} />
            <Route path="payment" element={<Payment />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
