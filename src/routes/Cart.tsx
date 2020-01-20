import React from 'react'
import CartList from '../components/CartList'
import CartSummary from '../components/CartSummary'
import { Button } from '../components/Button'
import { useHistory } from 'react-router-dom'

const Cart: React.FC = () => {
  const history = useHistory()

  return (
    <main className="app-main">
      <h1 className="page-title">Produtos</h1>
      <CartList />
      <CartSummary />
      <Button type="button" onClick={() => history.push('/checkout')}>
        Seguir para o pagamento
      </Button>
    </main>
  )
}

export default Cart
