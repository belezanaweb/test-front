import React from 'react'
import * as S from './Card.styles'

const Card = ({ price, name, image, noPrice }) => {
  return (
    <S.CardContainer>
      <S.Image noPrice={noPrice} alt="produto" src={image} />
      <S.ContentContainer>
        <S.NameProduct>{name}</S.NameProduct>
        {!noPrice && (
          <S.Price>
            {price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: 'BRL'
            })}
          </S.Price>
        )}
      </S.ContentContainer>
    </S.CardContainer>
  )
}

export default Card
