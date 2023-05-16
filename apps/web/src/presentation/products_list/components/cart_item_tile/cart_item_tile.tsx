import { currencyFormatter } from '@/core'
import { Item } from '@/domain'

type CartItemTileProps = {
  item: Item,
  showPrice?: boolean
}

export default function CartItemTile({ item, showPrice = true }: CartItemTileProps) {
  const product = item.product
  const productImage = product.imageObjects[0].small
  const maxPrice = currencyFormatter.format(product.priceSpecification.maxPrice)
  const currentPrice = currencyFormatter.format(product.priceSpecification.price)
  const hasDiscount = product.priceSpecification.discount > 0

  return (
    <div data-testid="cart-item-tile" className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <img src={productImage} alt="Imagem representando um produto" className="w-20" />
        <p className="max-w-[200px] text-xs text-black md:max-w-[400px]">{product.name}</p>
      </div>

      {showPrice && (
        <div data-testid="cart-item-tile-price" className="flex flex-col text-sm">
          {hasDiscount && <p className="text-gray-300 line-through">{maxPrice}</p>}
          <p className="font-bold">{currentPrice}</p>
        </div>
      )}
    </div>
  )
}
