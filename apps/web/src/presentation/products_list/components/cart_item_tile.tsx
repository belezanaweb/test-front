import { Item } from '@/domain'

type CartItemTileProps = {
  item: Item
}

export default function CartItemTile({ item }: CartItemTileProps) {
  const product = item.product
  const productImage = product.imageObjects[0].small
  const maxPrice = product.priceSpecification.maxPrice
  const currentPrice = product.priceSpecification.price
  const hasDiscount = product.priceSpecification.discount > 0

  return (
    <div className="flex items-center gap-3">
      <img src={productImage} alt="Imagem representando um produto" className="w-20" />
      <p className="max-w-xs text-xs text-black">{product.name}</p>

      <div className="flex flex-col text-sm">
        {hasDiscount && <p className="text-gray-300 line-through">{maxPrice}</p>}
        <p className="font-bold">{currentPrice}</p>
      </div>
    </div>
  )
}
