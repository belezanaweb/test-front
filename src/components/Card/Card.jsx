import React from 'react'
import * as S from './Card.styles'

const Card = ({ text, price }) => {
  return (
    <S.StyledDiv>
      <S.StyledImg src={Image} />
      <S.StyledH3>{text}</S.StyledH3>
      <S.StyledParagraph>{price}</S.StyledParagraph>
    </S.StyledDiv>
  )
}

export default Card
