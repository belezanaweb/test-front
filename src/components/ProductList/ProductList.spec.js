import ProductList from './ProductList'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a ProductList component', function () {
  const component = renderer.create(<ProductList></ProductList>)
  expect(component).toBeDefined()
})
