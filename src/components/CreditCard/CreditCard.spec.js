import CreditCard from './CreditCard'
import React from 'react'
import renderer from 'react-test-renderer'
import BasketProvider from '../../context/Basket'

function CreditCardTest() {
  return (
    <BasketProvider>
      <CreditCard />
    </BasketProvider>
  )
}

test('should create a CreditCard component', function () {
  const component = renderer.create(
    <>
      <CreditCardTest />
    </>
  )
  expect(component).toBeDefined()
})
