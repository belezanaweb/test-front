import React from 'react'
import './Summary.css'
import { convertDecimalToCurrency } from '../../utils'

const Summary = (props) => {
  return (
    <div className="summary-container">
      <div className="line">
        <span>PRODUTOS</span>
        <span>{convertDecimalToCurrency(props.summary.subTotal)}</span>
      </div>
      <div className="line">
        <span>FRETE</span>
        <span>{convertDecimalToCurrency(props.summary.shipping)}</span>
      </div>
      <div className="line discount">
        <span>DESCONTO</span>
        <span>- {convertDecimalToCurrency(props.summary.discount)}</span>
      </div>
      <div className="line total">
        <span>TOTAL</span>
        <span>{convertDecimalToCurrency(props.summary.total)}</span>
      </div>
    </div>
  )
}

export default Summary
