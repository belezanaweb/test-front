import React from 'react';
import { mount } from 'enzyme';

import Product from './Product';

const setup = ({
  thumbnail,
  name,
  price,
  hidePrice
}) => {
  const component = mount(
    <Product
      thumbnail={thumbnail}
      name={name}
      price={price}
      hidePrice={hidePrice} />
  )

  return {
    component,
    img: component.find('img')
  }
}

describe('<Product />', () => {
  it('should render props', () => {
    const { img } = setup({thumbnail: '/test-img-url'})
    expect(img.prop('src')).toBeDefined()
  })
})
