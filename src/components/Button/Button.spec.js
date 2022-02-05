import Button from './Button'
import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'

const componentWithText = renderer.create(
  <BrowserRouter>
    <Button>o Boticário</Button>
  </BrowserRouter>
)

const component = renderer.create(
  <BrowserRouter>
    <Button></Button>
  </BrowserRouter>
)

test('should create a Button component', function () {
  expect(component).toBeDefined()
})

test('should create a Button component with text', function () {
  const buttonText = 'o Boticário'
  expect(componentWithText.toJSON().children).toContain(buttonText)
})

test('should create a Button component without text and get default value from button', function () {
  expect(component.toJSON().children).toContain('Text Button')
})
