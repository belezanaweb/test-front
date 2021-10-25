import React from 'react'
import App from './App'
import { renderWithRouter } from './testUtils'
import { screen } from '@testing-library/dom'

test('full app rendering/navigating', () => {
  renderWithRouter(<App />)
  const appId = screen.getByTestId(/App/)
  expect(appId).toBeInTheDocument()
})
