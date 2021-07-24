import React from 'react'
import { useHistory } from 'react-router'
import { useCheckout } from '../../hooks/useCheckout'

import Button from '../../components/Button'
import Informations from '../../components/Informations'
import ListItems from '../../components/ListItems'

function Cart() {
  const history = useHistory()

  const { data } = useCheckout()

  const { discount, shippingTotal, subTotal, items } = data

  return (
    <main>
      <h5>Produtos</h5>
      <ListItems list={items} />
      <Informations discount={discount} shipping={shippingTotal} subtotal={subTotal} />
      <Button onClick={() => history.push('/payment')}>Seguir para pagamento</Button>
    </main>
  )
}

export default Cart
