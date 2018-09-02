import React from 'react'

import { mount } from 'enzyme';

import Box from './Box';

const setup = props => {
  const component = mount(
    <Box title={props.title}>{props.children}</Box>
  )

  return {
    component: component,
    children: component.children().at(1),
    h4: component.find('h4')
  }
}

describe('<Box />', () => {
  it('should render title', () => {
    const { h4 } = setup({title: 'Product', children: 'Test Children'});
    expect(h4.text()).toMatch(/^Product$/)
  })
  it('should render children', () => {
    const { children } = setup({title: 'Product', children: 'Test Children'})
    expect(children.text()).toMatch(/^Test Children$/)
  })
})
