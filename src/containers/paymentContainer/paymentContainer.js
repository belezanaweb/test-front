import React from 'react'
import { CardForm } from './components/cardForm'
import { Title } from '../../commons/title'
import { PriceSummary } from '../../commons/priceSummary'
import { Button } from '../../commons/button'
import { connect } from 'react-redux'
import './paymentContainer.css'

const Component = ({ products, card }) => (
  <div className="payment">
    <Title text="CARTÃO DE CRÉDITO" />
    <CardForm />
    <PriceSummary
      subTotal={products.subTotal}
      shippingTotal={products.shippingTotal}
      discount={products.discount}
      total={products.total}
    />
    <Button text="FINALIZAR PEDIDO" />
  </div>
)

const PaymentContainer = connect((state) => ({ products: state.products, card: state.card }))(
  Component
)

export { PaymentContainer }
