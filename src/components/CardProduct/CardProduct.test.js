import React from 'react';
import { shallow } from 'enzyme';
import CardProduct from './index';

describe('CardProduct', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<CardProduct debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = shallow(<CardProduct products={[]} />);
    expect(component).toMatchSnapshot();
  });
});
