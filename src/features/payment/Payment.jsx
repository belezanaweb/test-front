import React from 'react'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Total from '../../components/Total/Total'

const PaymentFeature = () => {
  console.log('PaymentFeature')
  return (
    <>
      <Container title="Pagamento"></Container>
      <Total></Total>

      <Button toPage="success">finalizar o pedido</Button>
    </>
  )
}

export default PaymentFeature
