import React from 'react'
import * as S from './styled'

const CardContainer = ({ children, title }) => {
  return (
    <div>
      <S.CardContainerTitle>{title}</S.CardContainerTitle>
      <S.CardContainer>{children}</S.CardContainer>
    </div>
  )
}

export default CardContainer
