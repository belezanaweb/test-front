import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/cart'

import NavBar from '../../components/NavBar'
import CreditCardForm from '../../components/CreditCardForm'
import Total from '../../components/Total'
import Button from '../../components/Button'

import { Container } from './styles'

const Payment = () => {
  const navigate = useNavigate()
  const { totalData } = useCart()

  const handleSubmit = () => {
    navigate('/confirmacao')
  }

  return (
    <div>
      <NavBar actualStep={'payment'} />
      <Container>
        <h1>cartão de crédito</h1>
        <CreditCardForm formId={'creditCardForm'} formSubmitted={handleSubmit} />
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