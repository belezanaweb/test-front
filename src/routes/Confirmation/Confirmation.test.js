import React from 'react'
import Confirmation from './Confirmation'
import { renderWithRouter } from '../../testUtils'
import { screen } from '@testing-library/dom'

test('navigates to Confirmation route', () => {
  renderWithRouter(<Confirmation />)
  const linkElement = screen.getByTestId(/Confirmation/)
  expect(linkElement).toBeInTheDocument()
})
