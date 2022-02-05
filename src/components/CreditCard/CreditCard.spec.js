import CreditCard from './CreditCard'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a CreditCard component', function () {
  const component = renderer.create(<CreditCard />)
  expect(component).toBeDefined()
})
