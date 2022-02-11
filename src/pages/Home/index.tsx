import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import api from '../../services/api';

import formatCurrency from '../../helpers/formatCurrency';
import setCartItemsQuantity from '../../helpers/set-items-quantity';

import { useCart } from '../../hooks/useCart';
import { Cart, CartItem } from '../../interfaces/Cart';
import Header from './components/Header';

export default function Home() {
  const [items, setItems] = useState<CartItem[]>([]);
  const { addProduct, cartItems } = useCart();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Cart>('5b15c4923100004a006f3c07');

      const data = response.data.items.map((item: CartItem) => {
        item.product.priceSpecification.price = formatCurrency(
          item.product.priceSpecification.price
        );

        const dataWrapper = {
          product: item.product,
          quantity: item.quantity
        };

        return dataWrapper;
      });

      setItems(data);
    }
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <ProductList>
        {items.map((item: CartItem) => (
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
