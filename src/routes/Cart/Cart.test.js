import React from 'react'
import Cart from './Cart'
import { renderWithRouter } from '../../testUtils'
import { screen } from '@testing-library/dom'

test('navigates to cart route', () => {
  renderWithRouter(<Cart />)
  const linkElement = screen.getByTestId(/Cart/)
  expect(linkElement).toBeInTheDocument()
})
