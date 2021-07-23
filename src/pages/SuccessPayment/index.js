import React from 'react'
import Informations from '../../components/Informations'
import ListItems from '../../components/ListItems'
import PaymentInfomations from '../../components/PaymentInformations'
import SuccessMessage from '../../components/SuccessMessage'

function SuccessPayment() {
  return (
    <main>
      <SuccessMessage />
      <h5>Pagamento</h5>
      <PaymentInfomations name="Camila Araldi" creditCard="*************" expiration="19/2029" />
      <h5>Produtos</h5>
      <ListItems />
      <Informations />
    </main>
  )
}

export default SuccessPayment
