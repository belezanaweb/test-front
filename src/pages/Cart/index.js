import React from 'react'
import { useHistory } from 'react-router-dom'
import PurchaseSummary from '../../components/PurchaseSummary'
import Button from '../../components/Button'
import Products from '../../components/Products'
import * as M from '../../styles/structure'

const Cart = () => {
  const history = useHistory()

  return (
    <M.Main data-testid="cart-page">
      <Products />
      <div>
        <PurchaseSummary />
        <Button label="Seguir para o pagamento" onClick={() => history.replace('/payment')} />
      </div>
    </M.Main>
  )
}

export default Cart
