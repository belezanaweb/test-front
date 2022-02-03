import Button from './Button'
import React from 'react'
import renderer from 'react-test-renderer'

test('should create a Button component', function () {
  const component = renderer.create(<Button></Button>)
  expect(component).toBeDefined()
})

test('should create a Button component with text', function () {
  const buttonText = 'o Boticário'
  const component = renderer.create(<Button>{buttonText}</Button>)
  expect(component.toJSON().children).toContain(buttonText)
})

test('should create a Button component without text and get default value from button', function () {
  const component = renderer.create(<Button></Button>)
  expect(component.toJSON().children).toContain('Text Button')
})
