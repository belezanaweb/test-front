import MyRoutes from './routers'
import { CheckoutProvider } from './stores/Checkout/Checkout.store'

import './App.css'

export default function App() {
  return (
    <CheckoutProvider>
      <MyRoutes />
    </CheckoutProvider>
  )
}
