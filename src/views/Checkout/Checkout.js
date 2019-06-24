import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import Navigation from '../../components/Navigation'

function Checkout ({ children, location }) {
  const { pathname, state } = location || {}
  const { order } = state || {}

  useEffect(() => {
    if (!order) {
      fetch(process.env.REACT_APP_API_ORDER)
        .then(res => res.json())
        .then(order => navigate('/checkout/cart', { replace: true, state: { order, step: 1 } }))
    }
  }, [order])

  return (
    <>
      <Navigation>
        <Navigation.List>
          <Navigation.Item active={pathname === '/checkout/cart'}>Sacola</Navigation.Item>
          <Navigation.Item active={pathname === '/checkout/payment'}>Pagamento</Navigation.Item>
          <Navigation.Item active={pathname === '/checkout/confirmation'}>
            Confirmação
          </Navigation.Item>
        </Navigation.List>
      </Navigation>
      {children}
    </>
  )
}

Checkout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.object
  })
}

export default Checkout
