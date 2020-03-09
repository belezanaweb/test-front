import React from 'react';
import { useSelector } from 'react-redux';

import PropType from 'prop-types';

import { Cardboard, ProductsGroup, Product, Title } from '..';

const CartProductsContainer = function({ showPrices = true }) {
  const cartItems = useSelector(state => state.cart.items);

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

CartProductsContainer.propType = {
  showPrice: PropType.boll
};

export default CartProductsContainer;
