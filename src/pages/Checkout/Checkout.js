import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useCart } from '../../hooks/useCart'
import Button from '../../components/Button'
import formatPrice from '../../helpers/formatPrice'
import CheckoutResume from '../../components/CheckoutResume'
import CheckoutForm, { checkoutScheme } from '../../components/CheckoutForm'

import * as S from './styles'

const Checkout = () => {
  const { shippingTotal, total, subTotal, discount, handleSubmitCheckout } = useCart()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(checkoutScheme)
  })

  const onSubmit = (data) => handleSubmitCheckout(data)

  return (
    <S.Checkout>
      <CheckoutForm errors={errors} register={register} />
      <CheckoutResume
        productsPrice={formatPrice(subTotal)}
        freightPrice={formatPrice(shippingTotal)}
        discountPrice={formatPrice(discount)}
        totalPrice={formatPrice(total)}
      />
      <Button onClick={handleSubmit(onSubmit)}>FINALIZAR O PEDIDO</Button>
    </S.Checkout>
  )
}

export default Checkout
