import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import CartComponent from './CartComponent'

function Cart ({ location, ...rest }) {
  const { state } = location || {}
  const { order } = state || {}

  if (!order) {
    navigate('/checkout', { replace: true })
    return null
  }

  return <CartComponent order={order} onProceed={() => navigate('/checkout/payment', { state })} />
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object
  })
}

export default Cart
