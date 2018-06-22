import React from 'react'

import './Total.css'

const Total = ({values, format}) =>
  <dl className="total">
    <dd>Produtos: <span>{values.subTotal.toLocaleString('pt-BR', format)}</span></dd>
    <dd>Frete: <span>{values.shippingTotal.toLocaleString('pt-BR', format)}</span></dd>
    {values.discount !== 0 && <dd className="discount">Desconto: <span>- {values.discount.toLocaleString('pt-BR', format)}</span></dd>}
    <dt>Total: <span>{values.total.toLocaleString('pt-BR', format)}</span></dt>
  </dl>

export default Total
