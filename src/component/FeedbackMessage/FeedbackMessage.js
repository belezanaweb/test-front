import React from 'react'
import * as S from './FeedbackMessage.styles'

const FeedbackMessage = ({ message }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImageCheck src={'images/Check.png'} />
        <S.ImageCircle src={'images/Circle.png'} />
      </S.ImageContainer>

      <S.Message>{message}</S.Message>
    </S.Container>
  )
}

export default FeedbackMessage
