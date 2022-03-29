import React, { useContext } from 'react'
import * as S from './PurchaseData.styled'
import CartContext from '../../context/CartContext'

export default function PurchaseData() {
  const { subTotal, shippingTotal, discount } = useContext(CartContext)

  const FormatToR$ = (value) => {
    parseFloat(value).toFixed(2)
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div>
      <S.PaymentDiv data-testid="purchase-data">
        <S.PaymentValuesWrapper>
          <S.ProductDisplay>
            <S.PaymentValuesP>PRODUTOS</S.PaymentValuesP>
            <p> {FormatToR$(subTotal)}</p>
          </S.ProductDisplay>

          <S.ProductDisplay>
            <S.PaymentValuesP>FRETE</S.PaymentValuesP>
            <p> {FormatToR$(shippingTotal)}</p>
          </S.ProductDisplay>

          <S.ProductDisplay>
            <S.PaymentValuesP color="#FF7800">DESCONTO</S.PaymentValuesP>
            <p color="#FF7800" className="change-color">
              {'- ' + FormatToR$(discount)}
            </p>
          </S.ProductDisplay>

          <S.ProductDisplay>
            <S.PaymentValuesP>
              <strong>TOTAL</strong>
            </S.PaymentValuesP>
            <p>
              <strong>{FormatToR$(subTotal + shippingTotal - discount)}</strong>
            </p>
          </S.ProductDisplay>
        </S.PaymentValuesWrapper>
      </S.PaymentDiv>
    </div>
  )
}
