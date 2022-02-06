import React from 'react'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import Total from '../../components/Total/Total'
import CreditCard from '../../components/CreditCard/CreditCard'
import { useBasketContext } from '../../context/Basket'

const PaymentFeature = () => {
  const isDisabled = useBasketContext().isDisabled

  return (
    <>
      <Container title="Cartão de Crédito">
        <CreditCard />
      </Container>

      <Total></Total>

      <Button toPage="success" disabled={isDisabled}>
        finalizar o pedido
      </Button>
    </>
  )
}

export default PaymentFeature
