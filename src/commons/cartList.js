import React from 'react';
import './cartList.css';
import { CartItem } from './cartItem';

const CartList = ({ items, showPrice = true }) => {
  return (
    <div data-testid="cart-list" className="cart-list">
      {items.map((item) => {
        return (
          <CartItem
            key={item.product.sku}
            name={item.product.name}
            src={item.product.imageObjects[0].small}
            price={showPrice ? item.product.priceSpecification.price : false}
          />
        );
      })}
    </div>
  );
};

export { CartList };
