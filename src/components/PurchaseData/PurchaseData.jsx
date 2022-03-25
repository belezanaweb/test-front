import React, { useContext } from 'react'
import * as S from '../../pages/Payment/Payment.styled'
import CartContext from '../../context/CartContext'

export default function PurchaseData() {
  const { subTotal, shippingTotal, discount } = useContext(CartContext)
  const changeParse = (int) => {
    parseFloat(int).toFixed(2)
    return int.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  return (
    <div>
      <S.PaymentDiv>
        <S.PaymentValuesWrapper>
          <div className="products-display">
            <S.PaymentValuesP>PRODUTOS</S.PaymentValuesP>
            <p> {changeParse(subTotal)}</p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP>FRETE</S.PaymentValuesP>
            <p> {changeParse(shippingTotal)}</p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP color="#FF7800">DESCONTO</S.PaymentValuesP>
            <p color="#FF7800" className="change-color">
              {'- ' + changeParse(discount)}
            </p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP>
              <strong>TOTAL</strong>
            </S.PaymentValuesP>
            <p>
              <strong>{changeParse(subTotal + shippingTotal - discount)}</strong>
            </p>
          </div>
        </S.PaymentValuesWrapper>
      </S.PaymentDiv>
    </div>
  )
}
