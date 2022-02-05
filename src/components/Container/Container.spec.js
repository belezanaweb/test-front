import Container from './Container'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a Button component', function () {
  const component = renderer.create(<Container></Container>)
  expect(component).toBeDefined()
})
