import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Card debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with props', () => {
    const component = shallow(<Card title="Confirmar Pagamento" />);

    expect(component).toMatchSnapshot();
  });
});
