import * as React from 'react';
import { Item } from '../../models/item.model';
import CartProductsItem from '../cart-products-item';

const CartProducts: React.FC<{
  items: Item[],
  showPrice?: boolean,
}> = ({ items = [], showPrice = false }) => (
  <React.Fragment>
    {items.map((item, index) => <CartProductsItem key={index} item={item} showPrice={showPrice} />)}
  </React.Fragment>
)

export default CartProducts;
