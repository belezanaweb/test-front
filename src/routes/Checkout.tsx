import React from 'react'
import CheckoutForm from '../components/CheckoutForm'

const Checkout: React.FC = () => {
  return (
    <main className="app-main container">
      <h1 className="page-title">Cartão de Crédito</h1>
      <CheckoutForm />
    </main>
  )
}

export default Checkout
