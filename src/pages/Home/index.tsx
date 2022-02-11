import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, Button } from './styles';

import setCartItemsQuantity from '../../helpers/set-items-quantity';

import { useCart } from '../../hooks/useCart';
import { CartItem } from '../../interfaces/Cart';
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
            <p>{item.product.name}</p>
            <span>{item.product.priceSpecification.price}</span>

            <Button onClick={() => addProduct(item.product.sku)}>
              <div className="quantity">
                {setCartItemsQuantity(cartItems, item.product.sku) || 0}
                <MdAddShoppingCart />
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </Button>
          </li>
        ))}
      </ProductList>
    </>
  );
}
