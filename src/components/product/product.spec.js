jest.mock('../../lib/currency', () => ({
  formatToCurrency: jest.fn()
}));

import React from 'react';

import Product, { ProductsGroup } from '.';

import { formatToCurrency } from '../../lib/currency';

const products = [
  {
    title: 'product 1',
    image: 'image 1',
    price: 10
  },
  {
    title: 'product 2',
    image: 'image 2',
    price: 20
  },
  {
    title: 'product 3',
    image: 'image 3',
    price: 30
  }
];

const [firstProduct] = products;

describe('Product', () => {
  it('should match a snapshot', () => {
    const wrapper = getStyledWrapperJSON(Product, {
      props: {
        ...firstProduct
      }
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should call `formatToCurrency` to format price', () => {
    getStyledWrapper(Product, {
      props: {
        ...firstProduct
      }
    });

    expect(formatToCurrency).toHaveBeenCalled();
  });
});

describe('ProductsGroup', () => {
  it('should match a snapshot', () => {
    const Container = () => (
      <ProductsGroup>
        {products.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </ProductsGroup>
    );

    const wrapper = getStyledWrapperJSON(Container);

    expect(wrapper).toMatchSnapshot();
  });
});
