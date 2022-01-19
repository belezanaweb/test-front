import React from 'react'
import * as S from './Card.styles'

const Card = ({ price, name, image, noPrice }) => {
  return (
    <S.CardContainer>
      <picture>
        <S.Source srcset={image.small} alt="produto" media="(max-width: 1023px)" />
        <S.Image noPrice={noPrice} alt="produto" src={image.large} />
      </picture>

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
