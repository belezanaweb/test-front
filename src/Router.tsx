import { Routes, Route, Navigate } from 'react-router-dom'
import Bag from './pages/Bag'
import Payment from './pages/Payment'
import Confirmation from './pages/Confirmation'
import { Layout } from './components/Layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/bag" replace />} />
      <Route path="/" element={<Layout />}>
        <Route index path="/bag" element={<Bag />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Route>
    </Routes>
  )
}
