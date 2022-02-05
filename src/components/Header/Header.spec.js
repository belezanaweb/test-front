import Header from './Header'
import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

const component = renderer.create(
  <BrowserRouter>
    <Header></Header>
  </BrowserRouter>
)

test('should create a Header component', function () {
  expect(component).not.toBeNull()
})

test('should verify if Header children element is UL', function () {
  const childrenType = component.toJSON().children[0].type
  expect(childrenType).toBe('ul')
})

test('should verify if Header has 3 Items', function () {
  const itemsLength = component.toJSON().children[0].children.length
  expect(itemsLength).toBe(3)
})
