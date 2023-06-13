import { Item } from "../../models/Item"
import { ListItem } from "./ListItem"
import { CartContainer } from "./styles"

type CartType = {
  items: Item[]
}

const Cart = ({ items }: CartType) => {
  return <CartContainer>
    {items.map((item) => (
      <ListItem
        key={item.product.sku}
        name={item.product.name}
        image={item.product.imageObjects[0].thumbnail}
        oldPrice={item.product.priceSpecification.maxPrice}
        price={item.product.priceSpecification.price}
      />
    ))}
  </CartContainer>
}

export { Cart }
