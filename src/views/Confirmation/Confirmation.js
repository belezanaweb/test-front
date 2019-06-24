import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import ConfirmationComponent from './ConfirmationComponent'

function Confirmation ({ location }) {
  const { state } = location || {}
  const { order, payment } = state || {}

  if (!order || !payment) {
    navigate('/checkout', { replace: true })
    return null
  }

  return <ConfirmationComponent order={order} payment={payment} />
}

Confirmation.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      order: PropTypes.object,
      payment: PropTypes.object
    })
  })
}

export default Confirmation
