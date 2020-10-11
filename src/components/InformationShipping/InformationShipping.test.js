import React from 'react';
import { shallow } from 'enzyme';
import InformationShipping from './index';

describe('InformationShipping', () => {
  it('should render correctly with props', () => {
    const mockCallBack = jest.fn();
    const component = shallow(<InformationShipping nameButton="Confirmar Pagamento" onClick={mockCallBack} />);
    expect(component).toMatchSnapshot();
  });
});
