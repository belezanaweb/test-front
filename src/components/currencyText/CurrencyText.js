import React from 'react'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'
import { CurrencyContainer, Prefix } from './currencyText.style'

const CurrencyText = (props) => {
  const { value } = props
  const normalizedNumber = value.toFixed(2)

  return (
    <CurrencyContainer>
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
  value: 0
}

CurrencyText.propTypes = {
  value: PropTypes.number
}

export default CurrencyText
