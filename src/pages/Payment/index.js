import React from 'react'

import { useCart } from '../../hooks/cart'

import NavBar from '../../components/NavBar'
import Card from '../../components/Card'
import Total from '../../components/Total'
import Button from '../../components/Button'

import { Container } from './styles'

const Payment = () => {
  const { totalData } = useCart()

  return (
    <div>
      <NavBar actualStep={'pagamento'} />
      <Container>
        <h1>cartão de crédito</h1>
        <Card />
        <Total
          subTotal={totalData.subTotal}
          shipping={totalData.shippingTotal}
          discount={totalData.discount}
          total={totalData.total}
        />
        <Button text={'finalizar o pedido'} />
      </Container>
    </div>
  )
}

export default Payment
