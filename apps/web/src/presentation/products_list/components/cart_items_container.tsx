import { Item } from '@/domain'
import Card from '@test-front/common-ui/src/components/card/Card'
import CartItemTile from './cart_item_tile'

type CartItemsContainerProps = {
  items: Item[]
}

export function CartItemsContainer({ items }: CartItemsContainerProps) {
  return (
    <Card>
      {items.map((item, index) => (
        <CartItemTile key={index} item={item} />
      ))}
    </Card>
  )
}
