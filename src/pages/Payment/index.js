import React from 'react'

import { useCart } from '../../hooks/cart'

import NavBar from '../../components/NavBar'
import CreditCardForm from '../../components/CreditCardForm'
import Total from '../../components/Total'
import Button from '../../components/Button'

import { Container } from './styles'

const Payment = () => {
  const { totalData } = useCart()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('e ####', e)
  }

  return (
    <div>
      <NavBar actualStep={'pagamento'} />
      <Container>
        <h1>cartão de crédito</h1>
        <CreditCardForm formId={'creditCardForm'} handleSubmit={handleSubmit} />
        <Total
          subTotal={totalData.subTotal}
          shipping={totalData.shippingTotal}
          discount={totalData.discount}
          total={totalData.total}
        />
        <Button type={'submit'} form={'creditCardForm'}>
          finalizar o pedido
        </Button>
      </Container>
    </div>
  )
}

export default Payment
