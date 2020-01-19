import React from 'react'
import CartList from '../components/CartList'

const Cart: React.FC = () => {
  return (
    <main>
      <h1 className="page-title">Produtos</h1>
      <CartList />
    </main>
  )
}

export default Cart
