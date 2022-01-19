import React from 'react'
import * as S from './styled'

/* cada item do carrinho */
const ProductItem = ({
  product: {
    name,
    imageObjects,
    priceSpecification: { price }
  },
  hidePrice
}) => {
  //funcao para conversar de dólares em reais
  const convertToReais = (value) => {
    return Number(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <S.ProductItemContainer>
      <S.ProductItemImageContainer hidePrice={hidePrice}>
        <S.ProductItemSource media="min-width: 650px" srcSet={imageObjects[0].medium} alt={name} />
        <S.ProductItemImage src={imageObjects[0].thumbnail} alt={name} />
      </S.ProductItemImageContainer>
      <S.ProductItemText>
        <S.ProductItemName>{name}</S.ProductItemName>
        {!hidePrice && <S.ProductItemPrice>{convertToReais(price)}</S.ProductItemPrice>}
      </S.ProductItemText>
    </S.ProductItemContainer>
  )
}

export default ProductItem
