import React from 'react'

import { useCart } from '../../hooks/useCart'
import CheckoutResume from '../../components/CheckoutResume'
import ConfirmationInfoCard from '../../components/ConfirmationInfoCard'
import ConfirmationMessage from '../../components/ConfirmationMessage'
import ProductList from '../../components/ProductList'
import PaymentNotFound from '../../components/PaymentNotFound'
import formatPrice from '../../helpers/formatPrice'

import * as S from './styles'

const Confirmation = () => {
  const { productList, paymentInfo, subTotal, shippingTotal, discount, total } = useCart()

  if (!paymentInfo) {
    return <PaymentNotFound />
  }

  const { finalCreditCardNumbers, name, expirationDate } = paymentInfo || {}

  return (
    <S.Confirmation>
      <ConfirmationMessage />
      <ConfirmationInfoCard
        creditCardNumber={`****.****.****.${finalCreditCardNumbers}`}
        name={name}
        expirationDate={expirationDate}
      />
      <ProductList productList={productList} small />
      <CheckoutResume
        productsPrice={formatPrice(subTotal)}
        freightPrice={formatPrice(shippingTotal)}
        discountPrice={`- ${formatPrice(discount)}`}
        totalPrice={formatPrice(total)}
      />
    </S.Confirmation>
  )
}

export default Confirmation
