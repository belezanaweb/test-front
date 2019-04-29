import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import CardProduct from './index';
import {
  ProductImage,
  ProductName,
  ProductPrice,
} from './styles';

const productExample = {
  name: 'Test for BLZ!',
  imageObjects: [{
    small: 'http://lorempixel.com/10/10'
  }],
  priceSpecification: {
    price: 50.1
  }
};

describe('CardProduct', () => {
  it('shows name', () => {
    const wrapper = shallow(<CardProduct product={productExample} />);

    expect(wrapper.find(ProductName).length).toBe(1);
    expect(wrapper.find(ProductName).text()).toBe('Test for BLZ!');
  });

  it('shows price', () => {
    const wrapper = shallow(<CardProduct product={productExample} />);

    expect(wrapper.find(ProductPrice).text()).toBe('R$ 50.1');
  });

  it('shows image', () => {
    const wrapper = shallow(<CardProduct product={productExample} />);

    expect(wrapper.find(ProductImage).prop('src')).toEqual('http://lorempixel.com/10/10');
  });
});
