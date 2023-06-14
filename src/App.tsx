import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartPage, ConfirmationPage, PaymentPage, NotFoundPage } from './pages'
import { Layout } from './pages/layout'
import { RequireStorageData } from './components/RequireStorageData'
import { AuthContextProvider } from './contexts/AuthContext'

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route
              path="confirmation"
              element={
                <RequireStorageData>
                  <ConfirmationPage />
                </RequireStorageData>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
