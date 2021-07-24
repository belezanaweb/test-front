import React from 'react'
import Informations from '../../components/Informations'
import ListItems from '../../components/ListItems'
import PaymentInfomations from '../../components/PaymentInformations'
import SuccessMessage from '../../components/SuccessMessage'
import { useCheckout } from '../../hooks/useCheckout'

function SuccessPayment() {
  const { data } = useCheckout()

  const { discount, shippingTotal, subTotal, items } = data

  return (
    <main>
      <SuccessMessage />
      <h5>Pagamento</h5>
      <PaymentInfomations name="Camila Araldi" creditCard="*************" expiration="19/2029" />
      <h5>Produtos</h5>
      <ListItems list={items} showPrice={false} />
      <Informations discount={discount} shipping={shippingTotal} subtotal={subTotal} />
    </main>
  )
}

export default SuccessPayment
