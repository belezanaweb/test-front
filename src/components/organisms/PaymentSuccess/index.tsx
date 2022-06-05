import React from 'react'

import { SuccessContent } from './styles'
import Card from '../../molecules/Card'
import success from '../../../assets/success.png'
import { useCheckout } from '../../../providers/checkout'

function PaymentSuccess() {
  const { creditCard, name, date } = useCheckout()

  return (
    <>
      <SuccessContent>
        <img src={success} alt="Ícone de sucesso" />
        <p>Compra efetuada com sucesso</p>
      </SuccessContent>
      <Card title="Pagamento">
        <p>{creditCard}</p>
        <p>{name}</p>
        <p>{date}</p>
      </Card>
    </>
  )
}

export default PaymentSuccess
