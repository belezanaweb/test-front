import React from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '../Layout'
import { ResponsiveBox } from '../Layout/styles'
import { Button, Section, CartList, CartSummary } from '../../components'
import { useCheckout } from '../../hooks/checkout'

function Cart() {
  const history = useHistory()
  const { cartItems, cartSummary, isLoading } = useCheckout()

  return (
    <Layout>
      <ResponsiveBox>
        <Section title="Produtos">
          <CartList cartItems={cartItems} isLoading={isLoading} />
        </Section>

        <CartSummary cartSummary={cartSummary} isLoading={isLoading} />
      </ResponsiveBox>
      <Button onClick={() => history.push('/payment')}>Seguir para o Pagamento</Button>
    </Layout>
  )
}

export default Cart
