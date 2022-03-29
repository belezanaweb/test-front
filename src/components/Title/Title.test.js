import React from 'react'
import Title from './Title'
import { render } from '@testing-library/react'

test('Must render in the page', () => {
  const { getByTestId } = render(<Title />)
  expect(getByTestId('title')).toBeTruthy()
})
