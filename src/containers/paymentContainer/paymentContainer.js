import React from 'react'
import { CardForm } from './components/cardForm'
import { Title } from '../../commons/title'
import { PriceSummary } from '../../commons/priceSummary'
import { Button } from '../../commons/button'
import './paymentContainer.css'

const PaymentContainer = () => (
  <div className="payment">
    <Title text="CARTÃO DE CRÉDITO" />
    <CardForm />
    <PriceSummary subTotal={0} shippingTotal={0} discount={0} total={0} />
    <Button text="FINALIZAR PEDIDO" />
  </div>
)

export { PaymentContainer }
