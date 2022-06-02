import React from 'react'

import AppRoutes from './pages/routes'
import { CheckoutProvider } from './providers/checkout'
import './styles/Global.css'

const App = () => (
  <CheckoutProvider>
    <div className="App">
      <AppRoutes />
    </div>
  </CheckoutProvider>
)

export default App
