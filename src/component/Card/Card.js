import React from 'react'
import * as S from './Card.styles'

const Card = ({ price, name, image }) => {
  return (
    <S.CardContainer>
      <S.Image alt="produto" src={image} />
      <S.ContentContainer>
        <S.NameProduct>{name}</S.NameProduct>
        <S.Price>
          {price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          })}
        </S.Price>
      </S.ContentContainer>
    </S.CardContainer>
  )
}

export default Card
