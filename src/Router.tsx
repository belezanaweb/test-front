import { Routes, Route } from 'react-router-dom'
import { Bag } from './pages/Bag'
import { Payment } from './pages/Payment'
import { Confirmation } from './pages/Confirmation'

export function Router() {
  return (
    <Routes>
      <Route path="/bag" element={<Bag />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}
