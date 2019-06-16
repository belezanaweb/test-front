import React from 'react'
import PropTypes from 'prop-types'

function Checkout ({ children }) {
  return <>{children}</>
}

Checkout.propTypes = {
  children: PropTypes.node
}

export default Checkout
