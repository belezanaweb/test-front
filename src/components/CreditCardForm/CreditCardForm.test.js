import React from 'react'
import renderer from 'react-test-renderer'
import CreditCardForm from './CreditCardForm'

it('renders correctly', () => {
  const tree = renderer.create(<CreditCardForm></CreditCardForm>).toJSON()
  expect(tree).toMatchSnapshot()
})
