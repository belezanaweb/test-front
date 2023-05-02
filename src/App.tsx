import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Layout } from './components/layout'

import { CartPage } from './routes/cart'
import { PaymentPage } from './routes/payment'
import { ConfirmationPage } from './routes/confirmation'
import { NotFound } from './routes/not-found'

const queryClient = new QueryClient()

export default function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="confirmation" element={<ConfirmationPage />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
