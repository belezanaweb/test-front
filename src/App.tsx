import { BrowserRouter } from 'react-router-dom'
import { CheckoutContextProvider } from './contexts/Checkout'
import { Router } from './Router'

export default function App() {
  return (
    <BrowserRouter>
      <CheckoutContextProvider>
        <Router />
      </CheckoutContextProvider>
    </BrowserRouter>
  )
}
