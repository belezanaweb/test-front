import React from 'react'
import TitleContainer from '../TitleContainer/TitleContainer'
import * as S from './PaymentResumo.styles'

const PaymentResume = ({ cardNumber, name, date }) => {
  const maskCard = () => {
    return cardNumber
      .split('.')
      .map((e, i) => (i === 3 ? e : '****'))
      .join('.')
  }

  return (
    <TitleContainer title={'Pagamento'}>
      <S.ParagraphData>{maskCard()}</S.ParagraphData>
      <S.ParagraphData>{name}</S.ParagraphData>
      <S.ParagraphData>{date}</S.ParagraphData>
    </TitleContainer>
  )
}

export default PaymentResume
