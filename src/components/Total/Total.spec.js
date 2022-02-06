import Total from './Total'
import React from 'react'
import renderer from 'react-test-renderer'
import BasketProvider from '../../context/Basket'

test('should create a Total component', function () {
  const component = renderer.create(
    <BasketProvider>
      <Total />
    </BasketProvider>
  )
  expect(component).toBeDefined()
})
