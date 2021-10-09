import React from 'react'
// import { useSelector } from "react-redux";
import * as S from './styles'
// import formatPrice from '../../utils/formatPrice'

const PurchaseSummary = () => {
  // const { subTotal, shippingTotal, discount, total } = useSelector((state) => state.cart);

  return (
    <S.Container>
      <S.Item>
        <span>Produtos</span>
        <span>R$ 100</span>
      </S.Item>

      <S.Item>
        <span>Frete</span>
        <span>R$ 100</span>
      </S.Item>

      <S.Item discount>
        <span>Desconto</span>
        <span>R$ 100</span>
      </S.Item>

      <S.Item>
        <strong>Total</strong>
        <strong>R$ 100</strong>
      </S.Item>
    </S.Container>
  )
}

export default PurchaseSummary
