import { formatCurrency } from '@/lib/format-currency'
import { Product } from '@/types'

export type ProductItemProps = {
  showPrice?: boolean
  product: Product
}
export const ProductItem = ({ showPrice = true, product }: ProductItemProps) => {
  const { name, priceSpecification } = product
  const { price, maxPrice, discount } = priceSpecification

  return (
    <div className="flex items-center gap-4">
      <img src={product.imageObjects[0].thumbnail} alt={product.name} className="w-16 h-16" />
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
