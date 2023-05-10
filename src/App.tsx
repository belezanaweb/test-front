import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { theme } from './utils/theme'
import { Bag } from './pages/bag'
import { Payment } from './pages/payment'
import { Confirmation } from './pages/confirmation'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<Bag />} />
          <Route path="payment" element={<Payment />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
