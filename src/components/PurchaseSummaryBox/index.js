import React from 'react'
import PropTypes from 'prop-types'

import { formatToReal } from '../../utils/currencyFormat'

import { Container } from './styles'

const PurchaseSummaryBox = ({ cart }) => {
  const { subTotal, shippingTotal, discount } = cart.data
  const total = subTotal + shippingTotal - discount

  return (
    <Container>
      <ul>
        <li>
          <p>PRODUTOS</p>
          <p>{formatToReal(subTotal)}</p>
        </li>
        <li>
          <p>FRETE</p>
          <p>{formatToReal(shippingTotal)}</p>
        </li>
        <li className="discount">
          <p>DESCONTO</p>
          <p> - {formatToReal(discount)}</p>
        </li>
        <li className="total">
          <p>TOTAL</p>
          <p>{formatToReal(total)}</p>
        </li>
      </ul>
    </Container>
  )
}

PurchaseSummaryBox.propTypes = {
  cart: PropTypes.shape({
    subTotal: PropTypes.number,
    shippingTotal: PropTypes.number,
    discount: PropTypes.number,
    total: PropTypes.number
  }).isRequired
}

export default PurchaseSummaryBox
