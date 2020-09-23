import React from 'react';
import { useSelector } from 'react-redux';

import Cardboard from '~/components/Cardboard';
import Product from '~/components/Product';
import Title from '~/components/Title';

import { ProductsGroup } from './styles';

const CartProductsContainer = function ({ showPrices = true }) {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Title>Produtos</Title>
      <Cardboard>
        <ProductsGroup>
          {cartItems.map(({ product: { name, priceSpecification: { price }, imageObjects } }) => (
            <Product
              title={name}
              showPrice={showPrices}
              price={price}
              key={name}
              image={imageObjects[0].medium}
            />
          ))}
        </ProductsGroup>
      </Cardboard>
    </>
  );
};

export default CartProductsContainer;
