import * as React from 'react';
import { Item } from '../../models/item.model';
import CartProductsItem from '../cart-products-item';

const CartProducts: React.FC<{
  items: Item[],
}> = ({ items = [] }) => (
  <div>
    {items.length > 0
      ?items.map((item, index) => <CartProductsItem key={index} item={item} />)
      : <span>Erro para trazer as informacoes do carrinho, tente novamento mais tarde</span>}
  </div>
)

export default CartProducts;
