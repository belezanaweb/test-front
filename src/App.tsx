import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, Confirmation, Payment, NotFound } from './pages'
import { Layout } from './pages/layout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="confirmation" element={<Confirmation />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
