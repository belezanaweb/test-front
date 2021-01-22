import React from 'react'

import { IValuesBox } from './types'
import * as S from './styled'
import { formatCurrency } from '../../../shared/helpers'

const ValuesBox = (props: IValuesBox) => {
  return (
    <S.ValuesBox>
      {props.subTotal && (
        <S.ValuesBoxListItem>
          <S.ValuesBoxItem>Produtos</S.ValuesBoxItem>
          <S.ValuesBoxItem>{formatCurrency(props.subTotal)}</S.ValuesBoxItem>
        </S.ValuesBoxListItem>
      )}
      {props.shippingTotal && (
        <S.ValuesBoxListItem>
          <S.ValuesBoxItem>Frete</S.ValuesBoxItem>
          <S.ValuesBoxItem>{formatCurrency(props.shippingTotal)}</S.ValuesBoxItem>
        </S.ValuesBoxListItem>
      )}
      {props.discount && (
        <S.ValuesBoxActiveItem>
          <S.ValuesBoxItem>Desconto</S.ValuesBoxItem>
          <S.ValuesBoxItem>- {formatCurrency(props.discount)}</S.ValuesBoxItem>
        </S.ValuesBoxActiveItem>
      )}
      {props.total && (
        <S.ValuesBoxHighlightedItem>
          <S.ValuesBoxItem>Total</S.ValuesBoxItem>
          <S.ValuesBoxItem>{formatCurrency(props.total)}</S.ValuesBoxItem>
        </S.ValuesBoxHighlightedItem>
      )}
    </S.ValuesBox>
  )
}

export default ValuesBox
