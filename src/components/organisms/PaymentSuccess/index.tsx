import React from 'react'

import { SuccessContent } from './styles'
import Card from '../../molecules/Card'
import success from '../../../assets/success.png'
import { useCheckout } from '../../../providers/checkout'

function PaymentSuccess() {
  const { creditCard, name, date } = useCheckout()

  function creditCardString() {
    let stringCard = creditCard.split('.')
    let newString: string[] = []
    for (let index = 0; index < stringCard.length; index++) {
      if (index === stringCard.length - 1) {
        newString.push(stringCard[index])
      } else {
        newString.push(stringCard[index].toString().replace(stringCard[index], '****'))
      }
    }
    return newString.join('.')
  }

  return (
    <>
      <SuccessContent>
        <img src={success} alt="Ícone de sucesso" />
        <p>Compra efetuada com sucesso</p>
      </SuccessContent>
      <Card title="Pagamento">
        <p>{creditCardString()}</p>
        <p>{name}</p>
        <p>{date}</p>
      </Card>
    </>
  )
}

export default PaymentSuccess
