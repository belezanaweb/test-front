import React, { useRef } from 'react'

import { useCheckout } from '../../hooks/checkout'

import { Section, Button, CartSummary } from '../../components'
import PaymentForm from '../../components/PaymentForm'

import Layout from '../Layout'

function Payment() {
  const { cartSummary, isLoading } = useCheckout()
  const formRef = useRef()

  return (
    <Layout>
      <Section title="Cartão de Crédito">
        <PaymentForm ref={formRef} />
      </Section>

      <CartSummary cartSummary={cartSummary} isLoading={isLoading} />

      <Button onClick={() => formRef?.current.submitForm()}>Finalizar o Pedido</Button>
    </Layout>
  )
}

export default Payment
