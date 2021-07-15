import React from 'react'
import './priceSummary.css'

const PriceSummary = ({ subTotal, shippingTotal, discount, total }) => (
  <div className="summary">
    <div className="row">
      <span>PRODUTOS</span>
      <span className="value">R$ {subTotal.toFixed(2)}</span>
    </div>
    <div className="row">
      <span>FRETE</span>
      <span className="value">R$ {shippingTotal.toFixed(2)}</span>
    </div>
    <div className="row discount">
      <span>DESCONTO</span>
      <span className="value">R$ {discount.toFixed(2)}</span>
    </div>
    <div className="row total">
      <span>TOTAL</span>
      <span className="value">R$ {total.toFixed(2)}</span>
    </div>
  </div>
)

export { PriceSummary }
