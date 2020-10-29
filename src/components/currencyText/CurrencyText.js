import React from 'react'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'
import { CurrencyContainer, Prefix, Minus } from './currencyText.style'

const CurrencyText = (props) => {
  const { value, showMinusSimbol } = props
  const normalizedNumber = value.toFixed(2)

  return (
    <CurrencyContainer>
      {showMinusSimbol && <Minus>-</Minus>}

      <Prefix>R$</Prefix>
      <NumberFormat
        value={normalizedNumber}
        displayType="text"
        thousandSeparator
        fixedDecimalScale
      />
    </CurrencyContainer>
  )
}

CurrencyText.defaultProps = {
  value: 0,
  showMinusSimbol: false
}

CurrencyText.propTypes = {
  value: PropTypes.number,
  showMinusSimbol: PropTypes.bool
}

export default CurrencyText
