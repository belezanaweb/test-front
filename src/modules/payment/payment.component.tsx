import { Card, Summary, Title, Button, Input } from 'components'
import { Link } from 'react-router-dom'
import React, { FC } from 'react'
import { PaymentForm } from './payment.style'
import { usePaymentForm } from 'hooks'

export const Payment: FC<{ children?: never }> = () => {
  const { inputs, buttonEnabled } = usePaymentForm()
  return (
    <>
      <Title>Cartão de Crédito</Title>
      <Card>
        <PaymentForm>
          {inputs.map((item) => (
            <Input {...item} key={item.label} />
          ))}
        </PaymentForm>
      </Card>
      <Summary />
      <Button as={Link} to="/confirm" disabled={!buttonEnabled}>
        Finalizar o pedido
      </Button>
    </>
  )
}
