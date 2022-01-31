import React from 'react'
import * as S from './CartTotal.styles'
import LineData from './LineData'

const CartTotal = ({ productPrice, shippingPrice, discountPrice, totalPrice }) => {
  return (
    <S.CartContainer>
      <LineData name="PRODUTOS" price={productPrice} />
      <LineData name="FRETE" price={shippingPrice} />
      <LineData name="DESCONTO" price={discountPrice} type="discount" />
      <LineData name="TOTAL" price={totalPrice} type="bold" />
    </S.CartContainer>
  )
}

export default CartTotal
