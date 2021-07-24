import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useCheckout } from '../../hooks/useCheckout'

import Informations from '../../components/Informations'
import ListItems from '../../components/ListItems'
import PaymentInfomations from '../../components/PaymentInformations'
import SuccessMessage from '../../components/SuccessMessage'

function SuccessPayment() {
  const history = useHistory()
  const { data, paymentData } = useCheckout()

  const { discount, shippingTotal, subTotal, items } = data

  useEffect(() => {
    if (!paymentData.name) {
      history.push('/')
    }
  }, [paymentData, history])

  return (
    <main>
      <SuccessMessage />
      <h5>Pagamento</h5>
      <PaymentInfomations
        name={paymentData.name}
        creditCard={paymentData.creditCard}
        expiration={paymentData.expirationDate}
      />
      <h5>Produtos</h5>
      <ListItems list={items} showPrice={false} />
      <Informations discount={discount} shipping={shippingTotal} subtotal={subTotal} />
    </main>
  )
}

export default SuccessPayment
