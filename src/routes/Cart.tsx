import React from 'react'
import CartList from '../components/CartList'
import CartSummary from '../components/CartSummary'

const Cart: React.FC = () => {
  return (
    <main>
      <h1 className="page-title">Produtos</h1>
      <CartList />
      <CartSummary />
    </main>
  )
}

export default Cart
