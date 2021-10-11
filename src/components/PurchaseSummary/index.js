import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './styles'
import format from '../../helpers/utility'

const PurchaseSummary = () => {
  const { cartData } = useSelector((state) => state.cart)

  return (
    <S.Container>
      <S.Item>
        <span>Produtos</span>
        <span>{format.price(cartData?.subTotal)}</span>
      </S.Item>

      <S.Item>
        <span>Frete</span>
        <span>{format.price(cartData?.shippingTotal)}</span>
      </S.Item>

      <S.Item discount>
        <span>Desconto</span>
        <span>{`- ${format.price(cartData?.discount)}`}</span>
      </S.Item>

      <S.Item>
        <strong>Total</strong>
        <strong>{format.price(cartData?.total)}</strong>
      </S.Item>
    </S.Container>
  )
}

export default PurchaseSummary
