import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { hideCreditCardNumbers } from '../../../shared/helpers'

import * as S from './styled'

const CardDataContainer = () => {
  const cardData = useSelector((state: RootState) => state.payment)

  return (
    <>
      <S.PaymentText>{hideCreditCardNumbers(cardData.number.toString())}</S.PaymentText>
      <S.PaymentText>{cardData.holder}</S.PaymentText>
      <S.PaymentText>{cardData.expirationDate}</S.PaymentText>
    </>
  )
}

export default CardDataContainer
