import { Route, Routes } from 'react-router-dom'
import Root from './pages/_root'
import NotFoundPage from './pages/_404'
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PageWithLoader from './components/PageWithLoader'

const Bag = React.lazy(() => import('./pages/Bag'))
const Payment = React.lazy(() => import('./pages/Payment'))
const OrderPlaced = React.lazy(() => import('./pages/OrderPlaced'))

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root>
        <Routes>
          <Route index element={<Bag />} />
          <Route path="pagamento/" element={<PageWithLoader renderPage={() => <Payment />} />} />
          <Route
            path="finaliza-pedido/"
            element={<PageWithLoader renderPage={() => <OrderPlaced />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Root>
    </QueryClientProvider>
  )
}
