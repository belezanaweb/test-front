import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import Input from './Input';
import required from '../../../helpers/validations/required';
import minlength from '../../../helpers/validations/minlength';

configure({ adapter: new Adapter() });

it('should show an error message', () => {
  const validations = [required, minlength(3)]

  const component = mount(
    <Input validations={validations} />
  );

  const input = component.find('input').getDOMNode()
  input.value = 'hi'
  component.find('input').simulate('change')

  expect(component.find('span').last().text()).toEqual(validations[1].error);

  input.value = 'hello'
  component.find('input').simulate('change')

  expect(component.find('span')).toHaveLength(1)
})
