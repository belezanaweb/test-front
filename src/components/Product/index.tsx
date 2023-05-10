import { FC } from 'react'
import { Product as ProductType } from 'types/api'
import * as S from './styles'
import { currencyFormatter } from 'utils/format'

type Props = {
  product: ProductType
}

export const Product: FC<Props> = ({
  product: { imageObjects, name, priceSpecification }
}) => (
  <S.Container>
    <S.Image
      src={imageObjects[0].thumbnail}
      srcSet={`${imageObjects[0].thumbnail} 450w, ${imageObjects[0].small} 768w, ${imageObjects[0].medium} 1170w`}
      sizes={`(max-width: 450px) 450px, (max-width: 768px) 768px, 1170px`}
      alt={name}
    />
    <S.Title>{name}</S.Title>
    <S.PriceContainer>
      {!!priceSpecification.discount && (
        <S.Discount>
          {currencyFormatter(priceSpecification.maxPrice)}
        </S.Discount>
      )}
      <S.Price>{currencyFormatter(priceSpecification.price)}</S.Price>
    </S.PriceContainer>
  </S.Container>
)
