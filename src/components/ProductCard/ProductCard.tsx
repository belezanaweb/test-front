import { Product } from '../../stores'

import {
  ProductCardStyled,
  ProductCardThumb,
  ProductCardTitle,
  ProductCardPrice,
  ProductCardPriceFrom,
  ProductCardPriceTo
} from './ProductCard.styled'
import { ProductCardProps } from './ProductCard.types'

import { formatToBRL } from '../../utils/formatCurrency'

export const ProductCard = (props: Product & ProductCardProps) => {
  return (
    <ProductCardStyled>
      <ProductCardThumb className="product-thumbnail">
        <img src={props.imageObjects[0].small} alt="" />
      </ProductCardThumb>

      <ProductCardTitle>{props.name}</ProductCardTitle>

      {!props.hideProductPrice && (
        <ProductCardPrice>
          {props.priceSpecification.maxPrice > props.priceSpecification.price && (
            <ProductCardPriceFrom>
              {formatToBRL.format(props.priceSpecification.maxPrice)}
            </ProductCardPriceFrom>
          )}
          <ProductCardPriceTo>
            {formatToBRL.format(props.priceSpecification.price)}
          </ProductCardPriceTo>
        </ProductCardPrice>
      )}
    </ProductCardStyled>
  )
}
