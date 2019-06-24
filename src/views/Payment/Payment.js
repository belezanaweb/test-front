import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import PaymentComponent from './PaymentComponent'

function goToConfirmation (state) {
  navigate('/checkout/confirmation', { state })
}

function Payment ({ location }) {
  const { state } = location || {}
  const { order } = state || {}

  if (!order) {
    navigate('/checkout', { replace: true })
    return null
  }

  return <PaymentComponent order={order} onProceed={goToConfirmation} />
}

Payment.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      order: PropTypes.object
    })
  })
}

export default Payment
