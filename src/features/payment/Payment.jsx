import React from 'react'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Total from '../../components/Total/Total'
import CreditCard from '../../components/CreditCard/CreditCard'

const PaymentFeature = () => {
  console.log('PaymentFeature')
  return (
    <>
      <Container title="Cartão de Crédito">
        <CreditCard />
      </Container>

      <Total></Total>

      <Button toPage="success">finalizar o pedido</Button>
    </>
  )
}

export default PaymentFeature
