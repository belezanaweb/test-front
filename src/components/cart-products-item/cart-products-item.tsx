import * as React from 'react';
import { Item } from '../../models/item.model';

const CartProductsItem: React.FC<{
  item: Item,
}> = ({ item }) => (
  <div>
    <img src={item!.product!.imageObjects[0].thumbnail} />
    <h3>{item.product.name}</h3>
    <strong>{item.product.priceSpecification.price}</strong>
  </div>
)

export default CartProductsItem;
