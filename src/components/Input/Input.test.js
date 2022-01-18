import React from 'react'
import renderer from 'react-test-renderer'
import Input from './Input'

it('renders correctly', () => {
  const tree = renderer.create(<Input></Input>).toJSON()
  expect(tree).toMatchSnapshot()
})
