import React from 'react';
import { mount } from 'enzyme';

import Summary from './Summary';

const setup = ({
  products = 0,
  shipping = 0,
  discount = 0,
  total = 0
}) => {
  const component = mount(
    <Summary products={products} shipping={shipping} discount={discount} total={total} />
  )

  return {
    component
  }
}

describe('<Summary />', () => {
  it('should render props', () => {
    const { component } = setup({
      products: 520, shipping: 20, discount: 50, total: 600
    })
    expect(component.prop('products')).toEqual(520)
    expect(component.prop('shipping')).toEqual(20)
    expect(component.prop('discount')).toEqual(50)
    expect(component.prop('total')).toEqual(600)

  })
  it('should render default props', () => {
    const { component } = setup({})
    expect(component.prop('products')).toEqual(0)
    expect(component.prop('shipping')).toEqual(0)
    expect(component.prop('discount')).toEqual(0)
    expect(component.prop('total')).toEqual(0)
  })
})


