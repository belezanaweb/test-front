import React from 'react'
import iconImg from '../../assets/icon/confirmation.svg'
import * as S from './styled'

const PaymentConfirmation = ({ status }) => {
  const successPaymentInfo = {
    success: {
      text: 'Compra efetuada com sucesso',
      color: '#FF7800',
      icon: iconImg
    }
  }

  const { icon, text, color } = successPaymentInfo[status]

  return (
    <>
      <S.PaymentConfirmationImage src={icon} />

      <S.PaymentConfirmationText color={color}>{text}</S.PaymentConfirmationText>
    </>
  )
}

export default PaymentConfirmation
