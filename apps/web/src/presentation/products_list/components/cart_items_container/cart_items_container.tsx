import { Item } from '@/domain'
import { Card } from '@test-front/common-ui'
import CartItemTile from '../cart_item_tile/cart_item_tile'

export type CartItemsContainerProps = {
  items: Item[],
  showPrice?: boolean,
  showTitle?: boolean
}

export function CartItemsContainer({
  items,
  showTitle = false,
  showPrice = true
}: CartItemsContainerProps) {
  return (
    <>
      <span data-testid="card-items-container"></span>
      <Card>
        {showTitle && <h2 className="text-xl">Produtos</h2>}

        {items.map((item, index) => (
          <CartItemTile key={index} item={item} showPrice={showPrice} />
        ))}
      </Card>
    </>
  )
}
