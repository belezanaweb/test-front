import Total from './Total'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a Total component', function () {
  const component = renderer.create(<Total />)
  expect(component).toBeDefined()
})
