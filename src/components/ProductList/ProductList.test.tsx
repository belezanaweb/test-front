import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import 'jest-styled-components';

import { provider } from '../../utils/testUtils';

import cart from '../../store/models/__mocks__/cart.json';

import ProductList from './ProductList';
import ProductListItem from './ProductListItem';

afterEach(function() {
  cleanup();
});

function renderProducts() {
  return cart?.items?.map(({ product }) => (
    <ProductListItem key={product.sku} data={product} />
  ));
}

describe('<ProductList />', () => {
  it('should not render when data is empty.', () => {
    const { container } = provider(<ProductList />, render);

    expect(container.firstChild).toBeEmpty();
  });

  it('should render within two products.', () => {
    const { container } = provider((
      <ProductList>
        {renderProducts()}
      </ProductList>
    ), render);

    expect(container).toMatchSnapshot();
  });

  it('should render ProductListItem on "sm" size.', () => {
    const { container } = provider((
      <ProductList size="sm">
        {renderProducts()}
      </ProductList>
    ), render);

    expect(container).toMatchSnapshot();
  });
});
