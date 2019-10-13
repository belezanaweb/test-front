import React from 'react'
import CheckoutPage from 'components/CheckoutPage'
import Input from 'components/Input'
import Col from 'components/Col'

const Payment = () => {
  return (
    <CheckoutPage
      title='Cartão de Crédito'
      nextStep='/confirm'
      textButton='Finalizar pedido'
    >
      <Col col='16'>
        <Input label='Número do cartão:' placeholder='____.____.____.____' />
      </Col>

      <Col col='16'>
        <Input label='Nome do Titular:' placeholder='Como no cartão' />
      </Col>

      <Col col='8'>
        <Input label='Validade (mês/ano):' placeholder='__/____' />
      </Col>
      <Col col='6' offset='1'>
        <Input label='CVV:' placeholder='___' />
      </Col>


    </CheckoutPage>
  )
}

export default Payment
