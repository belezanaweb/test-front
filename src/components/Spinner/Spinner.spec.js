import Spinner from './Spinner'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a Spinner component', function () {
  const component = renderer.create(<Spinner loaded={true} />)
  expect(component).toBeDefined()
})
