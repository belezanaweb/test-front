import React from 'react'
import { Link } from 'react-router-dom'
import PurchaseSummary from '../../components/PurchaseSummary'
import Button from '../../components/Button'
import Products from '../../components/Products'
import * as M from '../../styles/structure'

const Cart = () => {
  return (
    <M.Main>
      <Products />
      <div>
        <PurchaseSummary />
        <Link to="/pagamento">
          <Button label="Seguir para o pagamento" />
        </Link>
      </div>
    </M.Main>
  )
}

export default Cart
