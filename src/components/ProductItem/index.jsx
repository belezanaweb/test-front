import React from 'react'
import * as S from './styled'

/* cada item do carrinho */
const ProductItem = ({
  product: {
    productName,
    productImage,
    priceSpecification: { productPrice }
  },
  hideProductPrice
}) => {
  const convertToReais = (value) => {
    return Number(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <S.ProductItemContainer>
      <S.ProductItemImageContainer hidePrice={hideProductPrice}>
        <S.ProductItemSource
          media="min-width: 600px"
          srcSet={productImage[0].medium}
          alt={productName}
        />
        <S.ProductItemImage src={productImage[0].thumbnail} alt={productName} />
      </S.ProductItemImageContainer>
      <S.ProductItemText>
        <S.ProductItemName>{productName}</S.ProductItemName>
        {!hideProductPrice && (
          <S.ProductItemPrice>{convertToReais(productPrice)}</S.ProductItemPrice>
        )}
      </S.ProductItemText>
    </S.ProductItemContainer>
  )
}

export default ProductItem
