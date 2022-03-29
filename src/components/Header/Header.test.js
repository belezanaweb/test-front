import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'

test('Must render in the page', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('header')).toBeTruthy()
})
