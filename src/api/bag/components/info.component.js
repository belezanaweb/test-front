import React from "react"
import PropTypes from 'prop-types'

const PaymentComponent = ({bag}) => (
  <div>
    <p>Const</p>
  </div>
)

PaymentComponent.propTypes = {
  bag: PropTypes.object.isRequired
}

export default PaymentComponent
