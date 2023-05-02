import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Layout } from './components/layout'

import { CartPage } from './routes/cart'
import { PaymentPage } from './routes/payment'
import { ConfirmationPage } from './routes/confirmation'
import { NotFound } from './routes/not-found'

export default function App() {
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="confirmation" element={<ConfirmationPage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </BrowserRouter>
}
