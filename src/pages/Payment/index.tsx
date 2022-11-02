import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCreditCard } from '../../hooks/creditCard'
import { useCart } from '../../hooks/cart'

import NavBar from '../../components/NavBar'
import CreditCardForm from '../../components/CreditCardForm'
import Total from '../../components/Total'
import { Button } from '../../components/Button'

import { Root, Container, Content } from './styles'

const Payment: React.FC = () => {
  const navigate = useNavigate()
  const { totalData } = useCart()
  const { formIsValid } = useCreditCard()

  const handleSubmit = () => {
    if(formIsValid) navigate('/confirmacao')
  }

  return (
    <Root>
      <NavBar actualStep={'payment'} />
      <Container>
        <Content>
          <h1>cartão de crédito</h1>
          <CreditCardForm
            formId={'creditCardForm'}
            formSubmitted={handleSubmit}
          />
          <Total
            subTotal={totalData.subTotal}
            shipping={totalData.shippingTotal}
            discount={totalData.discount}
            total={totalData.total}
          />
          <Button type={'submit'} form={'creditCardForm'} disabled={!formIsValid} >
            finalizar o pedido
          </Button>
        </Content>
      </Container>
    </Root>
  )
}

export default Payment
