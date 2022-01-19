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
    <S.PaymentConfirmationContainer>
      <S.PaymentConfirmationContainerImage>
        <S.PaymentConfirmationImage src={icon} />
      </S.PaymentConfirmationContainerImage>
      <S.PaymentConfirmationText color={color}>{text}</S.PaymentConfirmationText>
    </S.PaymentConfirmationContainer>
  )
}

export default PaymentConfirmation
