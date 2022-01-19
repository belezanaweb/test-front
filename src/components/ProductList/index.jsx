import React from 'react'
import * as S from './styled'

const ProductList = ({ prices: { subTotal, shippingTotal, discount, total } }) => {
  const convertToReais = (value) => {
    return Number(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
  }

  const productListData = {
    subTotal: 'Produtos',
    shippingTotal: 'Frete',
    discount: 'Desconto',
    total: 'Total'
  }

  return (
    <S.ProductListContainer>
      <S.ProductListItem>
        <S.ProductListText>{productListData.subTotal}</S.ProductListText>
        <S.ProductListText>{convertToReais(subTotal)}</S.ProductListText>
      </S.ProductListItem>
      <S.ProductListItem>
        <S.ProductListText>{productListData.shippingTotal}</S.ProductListText>
        <S.ProductListText>{convertToReais(shippingTotal)}</S.ProductListText>
      </S.ProductListItem>
      <S.ProductListItem>
        <S.ProductListText discount>{productListData.discount}</S.ProductListText>
        <S.ProductListText discount>- {convertToReais(discount)}</S.ProductListText>
      </S.ProductListItem>
      <S.ProductListItem>
        <S.ProductListText total>{productListData.total}</S.ProductListText>
        <S.ProductListText total>{convertToReais(total)}</S.ProductListText>
      </S.ProductListItem>
    </S.ProductListContainer>
  )
}

export default ProductList
