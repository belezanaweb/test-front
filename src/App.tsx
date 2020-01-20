import React, { useEffect, useState } from 'react'
import Router from './routes'
import CartContext from './context/CartContext'
import { OrderProvider } from './context/OrderContext'

const App: React.FC = () => {
  const [cart, setCart] = useState({})

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(res => res.json())
      .then(data => setCart(data))
  }, [])

  return (
    <CartContext.Provider value={cart}>
      <OrderProvider>
        <Router />
      </OrderProvider>
    </CartContext.Provider>
  )
}

export default App
