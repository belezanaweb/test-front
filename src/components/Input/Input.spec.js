import Input from './Input'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a Input component', function () {
  const component = renderer.create(<Input />)
  expect(component).toBeDefined()
})
