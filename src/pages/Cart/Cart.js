import React from 'react'
import { useHistory } from 'react-router-dom'

import formatPrice from '../../helpers/formatPrice'
import CheckoutResume from '../../components/CheckoutResume'
import ProductList from '../../components/ProductList'
import Button from '../../components/Button'
import { useCart } from '../../hooks/useCart'

import * as S from './styles'

const Cart = () => {
  const { productList, shippingTotal, total, subTotal, discount } = useCart()
  const history = useHistory()

  const handleSubmit = () => history.push('/checkout')

  return (
    <S.Cart>
      <ProductList productList={productList} />
      <S.Sidebar>
        <CheckoutResume
          productsPrice={formatPrice(subTotal)}
          freightPrice={formatPrice(shippingTotal)}
          discountPrice={`- ${formatPrice(discount)}`}
          totalPrice={formatPrice(total)}
        />
        <Button onClick={handleSubmit}>SEGUIR PARA O PAGAMENTO</Button>
      </S.Sidebar>
    </S.Cart>
  )
}

export default Cart
