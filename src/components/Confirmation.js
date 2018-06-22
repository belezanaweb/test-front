import React from 'react'

import Items from './Items'
import Total from './Total'

import confirmation from './confirmation.png'
import './Confirmation.css'

const Confirmation = props =>
  <div className="confirmation">
    <div className="status">
      <img src={confirmation} alt="Confirmado" />
      <p>Compra efetuada com sucesso</p>
    </div>
    <h1>Pagamento</h1>
    <div className="information">
      <p>****.****.****.{props.payment.cc.slice(-4)}</p>
      <p>{props.payment.name}</p>
      <p>{props.payment.exp}</p>
    </div>
    <Items
      confirmation={true}
      {...props} />
    <Total
      values={props.cart}
      format={props.format} />
  </div>

export default Confirmation
