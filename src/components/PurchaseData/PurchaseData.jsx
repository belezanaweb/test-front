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
      <S.PaymentDiv>
        <S.PaymentValuesWrapper>
          <div className="products-display">
            <S.PaymentValuesP>PRODUTOS</S.PaymentValuesP>
            <p> {FormatToR$(subTotal)}</p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP>FRETE</S.PaymentValuesP>
            <p> {FormatToR$(shippingTotal)}</p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP color="#FF7800">DESCONTO</S.PaymentValuesP>
            <p color="#FF7800" className="change-color">
              {'- ' + FormatToR$(discount)}
            </p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP>
              <strong>TOTAL</strong>
            </S.PaymentValuesP>
            <p>
              <strong>{FormatToR$(subTotal + shippingTotal - discount)}</strong>
            </p>
          </div>
        </S.PaymentValuesWrapper>
      </S.PaymentDiv>
    </div>
  )
}
