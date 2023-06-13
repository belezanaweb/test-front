import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartPage, ConfirmationPage, PaymentPage, NotFoundPage } from './pages'
import { Layout } from './pages/layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CartPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="confirmation" element={<ConfirmationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
