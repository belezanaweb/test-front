import React from 'react'
import Payment from './Payment'
import { renderWithRouter } from '../../testUtils'
import { screen } from '@testing-library/dom'

test('navigates to Payment route', () => {
  renderWithRouter(<Payment />)
  const linkElement = screen.getByTestId(/Payment/i)
  expect(linkElement).toBeTruthy()
})
