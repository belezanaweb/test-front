import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

import setCartItemsQuantity from '../../helpers/set-items-quantity';

import { useCart } from '../../hooks/useCart';
import { Cart, CartItem } from '../../interfaces/Cart';
import Header from './components/Header';

export default function Home() {
  const { allProducts, addProduct, cartItems } = useCart();

  return (
    <>
      <Header />
      <ProductList>
        {allProducts.map((item: CartItem) => (
          <li key={item.product.sku}>
            <img src={item.product.imageObjects[0].medium} alt={item.product.name} />
            <strong>{item.product.name}</strong>
            <span>{item.product.priceSpecification.price}</span>
            <button
              type="button"
              data-testid="add-product-button"
              onClick={() => addProduct(item.product.sku)}
            >
              <div data-testid="cart-product-quantity">
                <MdAddShoppingCart size={16} color="#FFF" />
                {setCartItemsQuantity(cartItems, item.product.sku) || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    </>
  );
}
