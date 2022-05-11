import React from 'react'
import { formatPrice } from '../../util/format'
import * as S from './styles'

interface SubtotalProps {
  subTotal: number
  shippingTotal: number
  discount?: number
  total: number
}

const Subtotal = ({
  shippingTotal,
  subTotal,
  total,
  discount
}: SubtotalProps) => {
  return (
    <S.Wrapper>
      <S.InfoLine>
        <S.Text>PRODUTOS</S.Text>
        <S.Text>{formatPrice(subTotal)}</S.Text>
      </S.InfoLine>

      <S.InfoLine>
        <S.Text>FRETE</S.Text>
        <S.Text>{formatPrice(shippingTotal)}</S.Text>
      </S.InfoLine>

      {!!discount && (
        <S.InfoLine>
          <S.Text isDiscont={true}>DESCONTO</S.Text>
          <S.Text isDiscont={true}>- {formatPrice(discount)}</S.Text>
        </S.InfoLine>
      )}

      <S.InfoLine>
        <S.Text isTotal={true}>TOTAL</S.Text>
        <S.Text isTotal={true}>{formatPrice(total)}</S.Text>
      </S.InfoLine>
    </S.Wrapper>
  )
}

export default Subtotal
