import React from 'react'

import { IProductList } from './types'
import * as S from './styled'
import { formatCurrency } from '../../../shared/helpers'

const ProductList = (props: IProductList) => {
  return (
    <S.ProductList>
      {props.subTotal && (
        <S.ProductListItem>
          <S.ProductItem>Produtos</S.ProductItem>
          <S.ProductItem>{formatCurrency(props.subTotal)}</S.ProductItem>
        </S.ProductListItem>
      )}
      {props.shippingTotal && (
        <S.ProductListItem>
          <S.ProductItem>Frete</S.ProductItem>
          <S.ProductItem>{formatCurrency(props.shippingTotal)}</S.ProductItem>
        </S.ProductListItem>
      )}
      {props.discount && (
        <S.ProductActiveItem>
          <S.ProductItem>Desconto</S.ProductItem>
          <S.ProductItem>- {formatCurrency(props.discount)}</S.ProductItem>
        </S.ProductActiveItem>
      )}
      {props.total && (
        <S.ProductHighlightedItem>
          <S.ProductItem>Total</S.ProductItem>
          <S.ProductItem>{formatCurrency(props.total)}</S.ProductItem>
        </S.ProductHighlightedItem>
      )}
    </S.ProductList>
  )
}

export default ProductList
