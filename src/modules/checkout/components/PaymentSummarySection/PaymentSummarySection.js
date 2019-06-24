import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import CheckoutSection from '../CheckoutSection'

function formatCardNumber (input) {
  switch (input.length) {
    case 14:
      return `****.******.${input.substr(-4)}`
    case 15:
      return `****.******.${input.substr(-5)}`
    case 16:
      return `****.****.****.${input.substr(-4)}`
    default:
      return `${Array(input.length - 4)
        .fill()
        .map(() => '*')
        .join('')}${input.substr(-4)}`
  }
}

function PaymentSummarySection ({ payment: { exp, name, num }, ...props }) {
  return (
    <PaymentSummarySection.Container title="Pagamento" {...props}>
      <PaymentSummarySection.CreditCardNumber>
        {formatCardNumber(num)}
      </PaymentSummarySection.CreditCardNumber>
      {'\n'}
      {name}
      {'\n'}
      {exp}
    </PaymentSummarySection.Container>
  )
}

PaymentSummarySection.propTypes = {
  payment: PropTypes.shape({
    exp: PropTypes.string,
    name: PropTypes.string,
    num: PropTypes.string
  })
}

PaymentSummarySection.CreditCardNumber = styled.span`
  letter-spacing: -1px;
`

PaymentSummarySection.Container = styled(CheckoutSection)`
  ${CheckoutSection.Body} {
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    white-space: pre;
  }
`

export default PaymentSummarySection
