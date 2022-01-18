import React from 'react'
import renderer from 'react-test-renderer'
import CartItem from './CartItem'

it('renders correctly', () => {
  const tree = renderer.create(<CartItem></CartItem>).toJSON()
  expect(tree).toMatchSnapshot()
})
