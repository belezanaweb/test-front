import React from 'react';
import { mount } from 'enzyme';

import Step from './Step';

const setup = ({ title, isActive }) => {
  const component = mount(
    <Step title={title} isActive={isActive} />
  );

  return {
    span: component.children().at(0),
  }
}

describe('<Step />', () => {
  it('should render title', () => {
    const { span } = setup({ title: 'Sacola', isActive: true })
    expect(span.text()).toMatch(/^Sacola$/)
  })
})

