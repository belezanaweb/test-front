import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'
import { convertMoney } from 'utils/convertMoney'

export const CardProduct = ({
  product: {
    name,
    imageObjects,
    priceSpecification: { price },
    onClick
  }
}) => {
  const productName = name.length > 65 ? name.split('-')[0] : name

  return (
    <S.CardProductItem>
      <S.CardProductImgWrapper>
        <S.CardProductSource
          media="(min-width: 650px)"
          srcSet={imageObjects[0].medium}
          alt={name}
        />
        <S.CardProductImg src={imageObjects[0].thumbnail} alt={name} />
      </S.CardProductImgWrapper>
      <S.CardProductText>
        <S.CardProductName>{productName}</S.CardProductName>
        <S.CardProductPrice>{convertMoney(price)}</S.CardProductPrice>
      </S.CardProductText>
    </S.CardProductItem>
  )
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageObjects: PropTypes.array.isRequired,
    priceSpecification: PropTypes.shape({
      price: PropTypes.number.isRequired
    })
  })
}
