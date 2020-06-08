import React from 'react';

import theme, { Theming } from '../../theme';

import Card from '../Card';

import cart from '../../store/models/__mocks__/cart.json';

import ProductList from './ProductList';
import ProductListItem from './ProductListItem';

const Provider = (storyFn: () => React.ReactNode) => (
  <Theming theme={theme}>
    {storyFn()}
  </Theming>
);

export default {
  component: ProductList,
  decorators: [Provider],
  title: 'ProductList',
};

export const Default = () => (
  <Card css={{ display: 'block', margin: '20px' }}>
    <ProductList>
      {cart.items.map((data) => (
        <ProductListItem key={data.product.sku} data={data.product} />
      ))}
    </ProductList>
  </Card>
);

export const SmallSize = () => (
  <Card css={{ display: 'block', margin: '20px' }}>
    <ProductList size="sm">
      {cart.items.map((data) => (
        <ProductListItem key={data.product.sku} data={data.product} />
      ))}
    </ProductList>
  </Card>
);
