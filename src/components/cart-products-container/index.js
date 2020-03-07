import React from 'react';
import { useSelector } from 'react-redux';

import { Cardboard, ProductsGroup, Product, Title } from '..';

const CartProductsContainer = function() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <>
      <Title>Produtos</Title>
      <Cardboard>
        <ProductsGroup>
          {cartItems.map(({ product: { name, priceSpecification: { price }, imageObjects } }) => (
            <Product title={name} price={price} key={name} image={imageObjects[0].medium} />
          ))}
        </ProductsGroup>
      </Cardboard>
    </>
  );
};

export default CartProductsContainer;
