import React from 'react'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'

const PaymentFeature = () => {
  console.log('PaymentFeature')
  return (
    <>
      <Container title="Pagamento"></Container>
      <Button toPage="success">seguir para o sucesso</Button>
    </>
  )
}

export default PaymentFeature
