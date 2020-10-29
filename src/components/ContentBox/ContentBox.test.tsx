import React from 'react'
import { render, screen } from '@testing-library/react'

import ContentBox from './'

test('render ContentBox component', () => {
  render(<ContentBox />)

  expect(screen.getByText(/ContentBox/i)).toBeInTheDocument()
})
