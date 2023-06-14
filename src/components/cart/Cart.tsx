import { Item } from "../../models/Item"
import { ListItem } from "./ListItem"
import { CartContainer } from "./styles"

type CartType = {
  items: Item[],
  hidePrices?: boolean
}

const Cart = ({ items, hidePrices }: CartType) => {
  return <CartContainer>
    {items.map((item) => {
      let prices = hidePrices ? {} : {
        oldPrice: item.product.priceSpecification.maxPrice,
        price: item.product.priceSpecification.price
      }

      return (
        <ListItem
          key={item.product.sku}
          name={item.product.name}
          image={item.product.imageObjects[0].thumbnail}
          {...prices}
        />
      )
    })}
  </CartContainer>
}

export { Cart }
