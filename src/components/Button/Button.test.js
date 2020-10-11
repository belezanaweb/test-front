import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Button name="xau" debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = shallow(<Button name="oi" />);

    expect(component).toMatchSnapshot();
  });
});
