import React from 'react'
import Card from '../../components/Card'
import PurchaseSummary from '../../components/PurchaseSummary'
import Button from '../../components/Button'

const Cart = () => {
  return (
    <div>
      <Card title="Produtos">Cart</Card>
      <PurchaseSummary />
      <Button label="Seguir para o pagamento" />
    </div>
  )
}

export default Cart
