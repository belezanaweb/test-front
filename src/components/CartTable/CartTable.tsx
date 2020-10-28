import React from 'react'

import { ICartTable } from './interface'
import * as S from './CartTable.styled'
import { formatCurrency } from '../../utils'

export const CartTable = (props: ICartTable) => {
  return (
    <S.CartTable>
      {props.subTotal && (
        <S.CartLine>
          <S.CartItem>Produtos</S.CartItem>
          <S.CartItem>{formatCurrency(props.subTotal)}</S.CartItem>
        </S.CartLine>
      )}
      {props.shippingTotal && (
        <S.CartLine>
          <S.CartItem>Frete</S.CartItem>
          <S.CartItem>{formatCurrency(props.shippingTotal)}</S.CartItem>
        </S.CartLine>
      )}
      {props.discount && (
        <S.CartLineActive>
          <S.CartItem>Desconto</S.CartItem>
          <S.CartItem>- {formatCurrency(props.discount)}</S.CartItem>
        </S.CartLineActive>
      )}
      {props.total && (
        <S.CartLineHighLight>
          <S.CartItem>Total</S.CartItem>
          <S.CartItem>{formatCurrency(props.total)}</S.CartItem>
        </S.CartLineHighLight>
      )}
    </S.CartTable>
  )
}
