import React from 'react'

import CheckoutPage from 'components/CheckoutPage'
import CartProductList from 'components/CartProductList'

function Cart() {
  return (
    <CheckoutPage
      title='Produtos'
      nextStep='/payments'
      textButton='Seguir para o pagamento'
    >
      <CartProductList showPrice />
    </CheckoutPage>
  )
}

export default Cart
