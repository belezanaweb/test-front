import React from 'react'

import Layout from '../Layout'
import { Section, BannerSuccess, PaymentSummary, CartSummary, CartList } from '../../components'
import { useCheckout } from '../../hooks/checkout'

function PaymentConfirmation() {
  const { cartItems, cartSummary, isLoading } = useCheckout()

  return (
    <Layout>
      <BannerSuccess title="Compra efetuada com sucesso" />
      <Section title="Pagamento">
        <PaymentSummary />
      </Section>

      <Section title="Produtos">
        <CartList cartItems={cartItems} isLoading={isLoading} />
      </Section>

      <CartSummary cartSummary={cartSummary} isLoading={isLoading} />
    </Layout>
  )
}

export default PaymentConfirmation
