import React from 'react'
import PropTypes from 'prop-types'
import { TotalProductContainer, ValueItem } from './totalProductBox.style'
import CurrencyText from '../../components/currencyText'

const TotalProductBox = (props) => {
  const { total, subTotal, discount, shippingTotal } = props

  const items = [
    { label: 'produtos', value: subTotal },
    { label: 'frete', value: shippingTotal },
    { label: 'desconto', value: discount, isDiscount: true },
    { label: 'total', value: total, isTotal: true }
  ]
  return (
    items &&
    items.length > 0 && (
      <TotalProductContainer>
        {items.map((item) => (
          <ValueItem isTotal={item.isTotal} isDiscount={item.isDiscount} key={item.label}>
            <span>{item.label}</span>
            <CurrencyText showMinusSimbol={item.isDiscount} value={item.value} />
          </ValueItem>
        ))}
      </TotalProductContainer>
    )
  )
}

TotalProductBox.defaultProps = {
  total: 0,
  subTotal: 0,
  discount: 0,
  shippingTotal: 0
}

TotalProductBox.propTypes = {
  total: PropTypes.number,
  subTotal: PropTypes.number,
  discount: PropTypes.number,
  shippingTotal: PropTypes.number
}

export default TotalProductBox
