import { Product } from '../../services/hooks/useData'

import { CurrencyText } from '../Typography/CurrencyText'

import { TextBody } from '../Typography/styles'
import { CartItemContainer, CarItemImage, PriceWrapper } from './styles'

interface CartItemProps extends Product {
  showPrice?: boolean;
}

export function CartItem({ name, image, price, maxPrice, showPrice }: CartItemProps) {
  const hasPromotionalPrice = price != maxPrice

  return (
    <CartItemContainer>
      <CarItemImage src={image} alt={name} aria-label="Product image" />
      <TextBody size="extraSmall" aria-label="Product name">
        {name}
      </TextBody>
      {showPrice && (
        <PriceWrapper>
          {hasPromotionalPrice && (
            <CurrencyText
              value={maxPrice}
              textDecoration="line-through"
              color="gray-400"
              fontFamily="secondary"
              aria-label="Original product price"
            />
          )}
          <CurrencyText value={price} fontWeight={700} aria-label="Final product price" />
        </PriceWrapper>
      )}
    </CartItemContainer>
  )
}
