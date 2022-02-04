import Header from './Header'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a Header component', function () {
  const component = renderer.create(<Header></Header>)
  expect(component).toBeDefined()
})
