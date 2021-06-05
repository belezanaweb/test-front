import React from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '../Layout'
import { Button, Section, CartList, CartSummary } from '../../components'
import { useCheckout } from '../../hooks/checkout'

function Cart() {
  const history = useHistory()
  const { cartItems, cartSummary, isLoading } = useCheckout()

  return (
    <Layout>
      <Section title="Produtos">
        <CartList cartItems={cartItems} isLoading={isLoading} />
      </Section>

      <CartSummary cartSummary={cartSummary} isLoading={isLoading} />

      <Button onClick={() => history.push('/payment')}>Seguir para o Pagamento</Button>
    </Layout>
  )
}

export default Cart
