import { useMemo } from 'react'

import { formatCurrency } from '@/lib/format-currency'
import { Product, ProductImage } from '@/types'

export type ProductItemProps = {
  showPrice?: boolean
  product: Product
}

const imageSizes: Record<keyof Omit<ProductImage, 'featured' | 'valid'>, string> = {
  thumbnail: '375w',
  small: '640w',
  medium: '768w',
  large: '1024w',
  extraLarge: '1280w'
}

type ImageSizes = keyof typeof imageSizes

const createSrcSet = (images: ProductImage[]) => {
  return images
    .map((image) => {
      return Object.keys(image)
        .filter((key) => Object.keys(imageSizes).includes(key))
        .map((i) => `${image[i as ImageSizes]} ${imageSizes[i as ImageSizes]}`)
    })
    .join(', ')
}

export const ProductItem = ({ showPrice = true, product }: ProductItemProps) => {
  const { name, priceSpecification } = product
  const { price, maxPrice, discount } = priceSpecification

  const sizes = useMemo(() => createSrcSet(product.imageObjects), [product.imageObjects])

  return (
    <div className="flex items-center gap-4">
      <img
        className="w-16 h-16"
        loading="lazy"
        src={product.imageObjects[0]?.thumbnail}
        srcSet={sizes}
        alt={product.name}
      />
      <p className="text-xs lg:text-base flex-1">{name}</p>

      {showPrice && (
        <div className="flex flex-col">
          {!!discount && (
            <s className="text-sm lg:text-base text-[#9B9B9B]" data-testid="product-discount-price">
              {formatCurrency(maxPrice)}
            </s>
          )}
          <p className="text-sm lg:text-base text-black font-bold" data-testid="product-price">
            {formatCurrency(price)}
          </p>
        </div>
      )}
    </div>
  )
}
