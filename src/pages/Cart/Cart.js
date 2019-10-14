import React from 'react'

import CheckoutPage from 'components/CheckoutPage'
import CartProductList from 'components/CartProductList'

function Cart(props) {
  return (
    <CheckoutPage
      textButton='Seguir para o pagamento'
      onSubmit={e => {
        e.preventDefault()
        props.history.push('/payments')
      }}
    >
      <CartProductList showPrice />
    </CheckoutPage>
  )
}

export default Cart
